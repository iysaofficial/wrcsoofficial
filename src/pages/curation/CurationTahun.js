import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/Kurasi.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { ambilBerkasKurasi, berkasTampil } from "../../lib/kurasiApi";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa kartu, bukan daftar bernomor butir ─────────────────────────────
 *
 * Bentuk aslinya di dasbor dikelompokkan per butir dan bernomor, tiap baris
 * berlabel "Administrasi". Itu bahasa kurator. Pengunjung situs tidak menilai
 * butir; ia mencari satu dokumen dan ingin tahu apakah ada.
 *
 * Karena itu judul kartunya nama dokumennya — "SK Pembentukan Tim Juri" —
 * bukan nama berkasnya. Nama berkas tetap ditampilkan, kecil, karena itu yang
 * akan orang lihat setelah mengunduh.
 *
 * ── Kenapa hanya dokumentasi yang dilencanai ──────────────────────────────
 *
 * Hampir semua berkas di sini administrasi, jadi lencana "Administrasi" pada
 * hampir semuanya tidak memisahkan apa pun — ia cuma kata yang sama berulang.
 * Yang membedakan justru yang sedikit.
 */
const CurationTahun = () => {
  const { tahun } = useParams();
  const [berkas, setBerkas] = useState(null);
  const [galat, setGalat] = useState(false);
  const wadah = useRef(null);

  /*
   * Jarak dari atas DIUKUR, bukan ditebak lewat breakpoint.
   *
   * Navbar situs ini `position: fixed`, dan tingginya berubah tidak monoton
   * terhadap lebar layar: pada lebar menengah menunya membungkus jadi dua
   * baris sehingga justru paling tinggi di sana, lalu memendek lagi saat
   * muat satu baris. Padding tetap karena itu selalu salah di salah satu
   * lebar — menutupi judul, atau menyisakan ruang kosong sepertiga layar.
   *
   * Elemennya dicari lewat beberapa kemungkinan dan hanya dipakai kalau
   * posisinya benar-benar fixed atau sticky. Situs yang navbarnya ikut
   * mengalir tidak butuh padding tambahan sama sekali, dan memberinya
   * padding hanya akan menyisakan lubang di atas judul.
   */
  useEffect(() => {
    if (!wadah.current) return undefined;
    const kandidat = ["header", ".navigation", "#rs-header", "nav"];
    let kop = null;
    for (const s of kandidat) {
      const el = document.querySelector(s);
      if (!el) continue;
      const pos = window.getComputedStyle(el).position;
      if (pos === "fixed" || pos === "sticky") { kop = el; break; }
    }
    if (!kop) {
      wadah.current.style.paddingTop = "3rem";
      return undefined;
    }

    const sesuaikan = () => {
      if (wadah.current) wadah.current.style.paddingTop = `${kop.offsetHeight + 48}px`;
    };
    sesuaikan();

    const pengamat = new ResizeObserver(sesuaikan);
    pengamat.observe(kop);
    window.addEventListener("resize", sesuaikan);
    return () => {
      pengamat.disconnect();
      window.removeEventListener("resize", sesuaikan);
    };
  }, []);

  useEffect(() => {
    let batal = false;
    setBerkas(null);
    setGalat(false);
    ambilBerkasKurasi(tahun)
      .then((d) => { if (!batal) setBerkas(berkasTampil(d)); })
      .catch(() => { if (!batal) setGalat(true); });
    return () => { batal = true; };
  }, [tahun]);

  return (
    <>
      <Navigation />
      <section className="kurasi-section" ref={wadah}>
        <div className="kurasi-container">
          <h1>Curation {tahun}</h1>

          {berkas === null && !galat && <p className="kurasi-kabar">Loading…</p>}

          {galat && (
            <p className="kurasi-kabar">
              The document list could not be loaded. Please try again shortly.
            </p>
          )}

          {/*
            Daftar kosong dan gagal memuat sengaja dibedakan. Keduanya
            menampilkan halaman tanpa berkas, tapi yang satu berarti "belum
            ada" dan yang lain "coba lagi" — pengunjung yang disuruh menunggu
            untuk sesuatu yang memang belum ada akan menunggu selamanya.
          */}
          {berkas !== null && berkas.length === 0 && (
            <p className="kurasi-kabar">No documents have been published for this edition yet.</p>
          )}

          {berkas !== null && berkas.length > 0 && (
            <>
              <p className="kurasi-ringkas">{berkas.length} documents</p>
              <div className="kurasi-kartu-grid">
                {berkas.map((f, i) => {
                  const Kartu = f.url ? "a" : "div";
                  const props = f.url
                    ? { href: f.url, target: "_blank", rel: "noreferrer" }
                    : {};
                  return (
                    <Kartu className="kurasi-kartu" key={i} {...props}>
                      {f.jenis === "dokumentasi" && (
                        <span className="kurasi-badge">Dokumentasi</span>
                      )}
                      <h2>{f.slot}</h2>
                      <p className="kurasi-nama">{f.nama}</p>
                    </Kartu>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CurationTahun;
