const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets', 'images', 'news');

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(targetDir, filename));
    const client = url.startsWith('https') ? https : http;
    client.get(url, function(response) {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', function(err) {
      fs.unlink(path.join(targetDir, filename), () => reject(err));
    });
  });
}

async function fetchOgImage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta\s+(?:property|name)=["']og:image["']\s+content=["'](.*?)["']/i);
        if (match) {
          resolve(match[1]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const images = {
    'albinaa.jpg': 'https://albinaa.sch.id/api/uploads/news/1784294483585-8p64nrivx1u.jpeg',
    'unesa.jpg': 'https://statik.unesa.ac.id/teknikelektro/thumbnail/b605b834-426d-41e6-8cee-f514d68c5e0b.jpg',
    'harianjogja.jpg': 'https://imgcdn.harianjogja.com/images/posts/2025/07/26/1222062/man1.jpg',
  };

  for (const [filename, url] of Object.entries(images)) {
    try {
      console.log(`Downloading ${filename}...`);
      await download(url, filename);
    } catch (e) {
      console.error(e.message);
    }
  }

  // Fetch for SMK Mikael
  try {
    const smkUrl = 'https://smkmikael.sch.id/news-detail.php?id=339';
    console.log(`Fetching OG for SMK Mikael...`);
    const smkOg = await fetchOgImage(smkUrl);
    if (smkOg) {
      console.log(`Found: ${smkOg}`);
      await download(smkOg, 'smkmikael.jpg');
    }
  } catch (e) { console.error(e.message); }

  // Fetch for Kompasiana
  try {
    const kompasianaUrl = 'https://www.kompasiana.com/humasman1yogyakarta6002/6882dfa2c925c476e106b9f2/gemar-ukir-prestasi-dua-murid-man-1-yogyakarta-raih-medali-perak-world-robotic-computer-science-olympiad-internasional-2025';
    console.log(`Fetching OG for Kompasiana...`);
    const kompOg = await fetchOgImage(kompasianaUrl);
    if (kompOg) {
      console.log(`Found: ${kompOg}`);
      await download(kompOg, 'kompasiana.jpg');
    }
  } catch (e) { console.error(e.message); }

  // Placeholders for IG
  await download('https://via.placeholder.com/400x250?text=Instagram+Post+1', 'ig1.jpg');
  await download('https://via.placeholder.com/400x250?text=Instagram+Post+2', 'ig2.jpg');
  console.log('Done!');
}

main();
