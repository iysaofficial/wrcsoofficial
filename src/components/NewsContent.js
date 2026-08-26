import React from "react";
import "../css/NewsContent.css";

const news2026 = [
  {
    title: "Al Binaa Torehkan Prestasi Gemilang di Ajang Internasional WRCSO dan IICYMS 2026",
    link: "https://albinaa.sch.id/berita/al-binaa-torehkan-prestasi-gemilang-di-ajang-internasional-wrcso-dan-iicyms-2026",
    img: "/assets/images/news/albinaa.jpg"
  },
  {
    title: "Instagram Post 1",
    link: "https://www.instagram.com/p/DcQhiBDpP18/?utm_source=ig_web_button_share_sheet",
    img: "/assets/images/news/ig1.jpg"
  },
  {
    title: "Instagram Post 2",
    link: "https://www.instagram.com/p/DajgBdagYpc/?utm_source=ig_web_button_share_sheet",
    img: "/assets/images/news/ig2.jpg"
  }
];

const news2025 = [
  {
    title: "Bangga, Mahasiswa Teknik Elektro Raih Gold Medal di WRCSO 2025",
    link: "https://teknikelektro.ft.unesa.ac.id/post/bangga-mahasiswa-teknik-elektro-raih-gold-medal-di-wrcso-2025",
    img: "/assets/images/news/unesa.jpg"
  },
  {
    title: "2 Murid MAN 1 Jogja Raih Medali Perak Olimpiade Robotik Internasional",
    link: "https://jogjapolitan.harianjogja.com/r-1222062/2-murid-man-1-jogja-raih-medali-perak-olimpiade-robotik-internasional",
    img: "/assets/images/news/harianjogja.jpg"
  },
  {
    title: "SMK Mikael News Detail",
    link: "https://smkmikael.sch.id/news-detail.php?id=339",
    img: "/assets/images/news/smkmikael.jpg"
  },
  {
    title: "Dua Murid MAN 1 Yogyakarta Raih Medali Perak WRCSO Internasional 2025",
    link: "https://www.kompasiana.com/humasman1yogyakarta6002/6882dfa2c925c476e106b9f2/gemar-ukir-prestasi-dua-murid-man-1-yogyakarta-raih-medali-perak-world-robotic-computer-science-olympiad-internasional-2025",
    img: "/assets/images/news/kompasiana.jpg"
  }
];

function NewsContent() {
  return (
    <>
      <div className="page-header text-center" style={{ paddingTop: '150px', paddingBottom: '50px', backgroundColor: '#f8f9fa' }}>
        <h1 className="fw-bold">Media Coverage - News</h1>
        <a className="fw-bold" href="/">
          Home
        </a>
      </div>

      <section className="news-section container mt-5 mb-5">
        <h2 className="text-center fw-bold mb-4">News 2026</h2>
        <div className="row justify-content-center mb-5">
          {news2026.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <a href={news.link} target="_blank" rel="noreferrer" className="text-decoration-none">
                <div className="card h-100 shadow-sm news-card">
                  <img 
                    src={news.img} 
                    className="card-img-top" 
                    alt={news.title}
                    onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/400x250?text=News+Image+Not+Found" }}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">{news.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-center fw-bold mb-4">News 2025</h2>
        <div className="row justify-content-center">
          {news2025.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <a href={news.link} target="_blank" rel="noreferrer" className="text-decoration-none">
                <div className="card h-100 shadow-sm news-card">
                  <img 
                    src={news.img} 
                    className="card-img-top" 
                    alt={news.title}
                    onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/400x250?text=News+Image+Not+Found" }}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">{news.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewsContent;
