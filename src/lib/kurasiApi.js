/**
 * Berkas kurasi dari API dasbor IYSA.
 *
 * ── Kenapa akronim, bukan id edisi ────────────────────────────────────────
 *
 * Id edisi berganti tiap tahun. Menanamkannya di situs berarti ada dua
 * repositori yang harus disunting berbarengan tiap edisi baru, dan yang lupa
 * salah satunya baru ketahuan saat pengunjung membuka halaman kosong.
 * Akronim + tahun menunjuk satu edisi dan keduanya sudah diketahui penulis
 * situs tanpa membuka dasbor.
 */

const API = "https://api-dashboard.iysa.or.id/api/public/v1";
const SERI = "wrcso";

async function ambil(jalur) {
  const res = await fetch(`${API}/${SERI}${jalur}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json.data;
}

/** Edisi yang ada di dasbor, terbaru dulu: `[{tahun, nama, dipin}]`. */
export async function ambilEdisi() {
  const d = await ambil("/edisi");
  return d?.edisi ?? [];
}

/**
 * Berkas kurasi satu edisi, sudah dikelompokkan per butir.
 *
 * Yang keluar hanya slot yang ditandai boleh disiarkan di dasbor — berkas
 * kurasi juga memuat anggaran, kontak juri, dan daftar peserta, dan tidak
 * semuanya boleh dibaca umum.
 */
export async function ambilBerkasKurasi(tahun) {
  const d = await ambil(`?tahun=${encodeURIComponent(tahun)}&sections=berkas_kurasi`);
  const seksi = (d?.sections ?? []).find((s) => s.key === "berkas_kurasi");
  return seksi?.isi ?? [];
}

/** Berkas yang berlaku untuk seluruh kategori, bukan satu kategori saja. */
const gabungan = (f) => !f.kategori || f.kategori === "Semua";

/**
 * Daftar berkas yang ditampilkan: rata, tanpa butir, tanpa duplikat kategori.
 *
 * ── Kenapa yang per kategori disembunyikan ───────────────────────────────
 *
 * Sebagian dokumen terbit satu kali per kategori lomba, dan di sebelahnya ada
 * satu berkas gabungan yang isinya mencakup semuanya. Menampilkan semuanya
 * membuat satu butir memakan layar penuh berisi berkas yang bagi pengunjung
 * terlihat sama, dan yang gabungan tenggelam di antaranya.
 *
 * Penyaringannya per SLOT, bukan menyeluruh: kalau sebuah slot ternyata TIDAK
 * punya berkas gabungan, yang per kategori tetap ditampilkan. Menghilangkan
 * keduanya berarti dokumen yang ada menjadi tidak bisa diakses sama sekali.
 *
 * ── Kenapa rata, tanpa pengelompokan butir ───────────────────────────────
 *
 * Nomor butir adalah bahasa kurator, bukan bahasa pengunjung. Yang dicari
 * orang di sini "SK juri ada tidak", bukan "butir tiga isinya apa".
 */
export function berkasTampil(butir) {
  const perSlot = new Map();
  for (const b of butir ?? []) {
    for (const f of b.berkas ?? []) {
      if (!perSlot.has(f.slot)) perSlot.set(f.slot, []);
      perSlot.get(f.slot).push(f);
    }
  }
  const hasil = [];
  for (const berkas of perSlot.values()) {
    const utama = berkas.filter(gabungan);
    hasil.push(...(utama.length > 0 ? utama : berkas));
  }
  return hasil;
}
