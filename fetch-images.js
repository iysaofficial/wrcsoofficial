const https = require('https');

const urls = [
  "https://albinaa.sch.id/berita/al-binaa-torehkan-prestasi-gemilang-di-ajang-internasional-wrcso-dan-iicyms-2026",
  "https://www.instagram.com/p/DcQhiBDpP18/?utm_source=ig_web_button_share_sheet",
  "https://www.instagram.com/p/DajgBdagYpc/?utm_source=ig_web_button_share_sheet",
  "https://teknikelektro.ft.unesa.ac.id/post/bangga-mahasiswa-teknik-elektro-raih-gold-medal-di-wrcso-2025",
  "https://jogjapolitan.harianjogja.com/r-1222062/2-murid-man-1-jogja-raih-medali-perak-olimpiade-robotik-internasional",
  "https://smkmikael.sch.id/news-detail.php?id=339",
  "https://www.kompasiana.com/humasman1yogyakarta6002/6882dfa2c925c476e106b9f2/gemar-ukir-prestasi-dua-murid-man-1-yogyakarta-raih-medali-perak-world-robotic-computer-science-olympiad-internasional-2025"
];

async function fetchOgImage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta\s+(?:property|name)=["']og:image["']\s+content=["'](.*?)["']/i);
        if (match) {
          resolve(match[1]);
        } else {
          resolve('No image found');
        }
      });
    }).on('error', () => resolve('Error fetching'));
  });
}

(async () => {
  for (const url of urls) {
    console.log(url, await fetchOgImage(url));
  }
})();
