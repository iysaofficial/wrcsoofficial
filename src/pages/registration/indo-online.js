import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import '../../css/Regist.css';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IndonesiaOnline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // batasan maksimal karakter
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const maxProjectChars = 160; // batasan maksimal karakter
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // React Router hook untuk navigasi

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputProjectChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    // Logika untuk menentukan harga berdasarkan kategori yang dipilih
    switch (value) {
      case "Social Science":
        setCategoryPrice("RP 950.000");
        break;
      case "Life Sciences":
        setCategoryPrice("RP 950.000");
        break;
      case "Environmental Science":
        setCategoryPrice("RP 950.000");
        break;
      case "Innovation Science":
        setCategoryPrice("RP 950.000");
        break;
      case "Engineering":
        setCategoryPrice("RP 950.000");
        break;
      case "Science in Islam":
        setCategoryPrice("Rp 950.000");
        break;
      default:
        setCategoryPrice("");
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");

    if (!termsAccepted) {
      alert("Anda harus menyetujui Syarat & Ketentuan terlebih dahulu.");
      navigate("/homeindo"); // Navigasi ke halaman HomeIndo
    }
  }, [navigate]);

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz-bcaaC60DfB2pibbL52s2IpHo7bPnIv73m_VDL3mDYahkI6cAjitb_M0fliySSB6o_g/exec";

    const form = document.forms["regist-form"];
    let buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (buttonCounter === 0) {
          buttonCounter++; // Cegah klik ganda
          setIsLoading(true); // Tampilkan loader
          try {
            const response = await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            if (response.ok) {
              setStatusMessage("Data berhasil dikirim!");
              form.reset(); // Reset form hanya jika pengiriman sukses
              setTimeout(() => {
                window.location.href = "/thankyouindo"; // Redirect setelah 1 detik
              }, 1000);
            } else {
              setStatusMessage("Terjadi kesalahan saat mengirim data.");
            }
          } catch (error) {
            setStatusMessage("Terjadi kesalahan saat mengirim data.");
          } finally {
            setIsLoading(false); // Sembunyikan loader
            buttonCounter = 0; // Reset counter untuk klik selanjutnya
          }
        }
      };
      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <>
      <Navigation />
      <section className="registration-section">
        <div class="container">
          <div class="content">
            <div class="sub">FORMULIR PENDAFTARAN</div>
            <h1 class="garis-bawah"></h1>
            <br />
            <br />
            <h4>
              HALLO PESERTA WRCSO 2025, Mohon perhatikan informasi berikut ini
              sebelum mengisi formulir pendaftaran :
            </h4>
            <br />
            <p>
              1. Mohon mengisi data yang diperlukan dengan benar dan memastikan
              tidak ada kesalahan penulisan. Pastikan juga bahwa data yang
              dikirim sudah final dan tidak mengalami perubahan.
            </p>
            <p>
              2. Setelah memastikan data sudah benar, Anda dapat mengklik tombol
              <span className="fw-bold"> &quot;KIRIM&quot;</span> cukup sekali
              saja. Jika data telah berhasil dikirimkan, Anda akan dipindahkan
              ke halaman lain.
            </p>
            <p>
              3. Akan ada email informasi bahwa pendaftaran telah diterima yang
              dikirimkan ke alamat email ketua tim, dan berkas akan divalidasi
              oleh tim kami. Mohon bersabar dan tunggu maksimal 3 hari setelah
              waktu pendaftaran, Letter of Acceptance (LOA) akan dikirimkan ke
              alamat email team leader.
            </p>
            <br />

            <form name="regist-form">
              <h1 className="text-sm md:text-lg lg:text-5xl">BIODATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Peserta Indonesia">
                    Kategori Peserta
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="PESERTA INDONESIA"
                    readOnly
                  />
                </div>
                <div class="input-box">
                  <label for="CATEGORY_COMPETITION" class="form-label">
                    Kategori Kompetisi
                  </label>
                  <select
                    type="text"
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    class="form-control"
                    placeholder="Choose Category Competition "
                    required
                  >
                    <option value="">--Pilih Kategori Kompetisi--</option>
                    <option value="Online Competition">
                      Online Competition
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Nama Ketua & Anggota Tim
                  </label>
                  <label>
                    <p>
                      Masukan nama ketua dan anggota tim dengan nama ketua tim
                      diawal, dengan format seperti berikut :
                    </p>
                    <p>Note : maksimal 5 anggota + 1 ketua tim</p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                    <h6>Irsyad Zaidan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Masukan Nama Ketua & Anggota"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Nomor WhatsApp Ketua Tim
                  </label>
                  <label>
                    <p>
                      Harap tulis dengan kode telepon, contoh : (kode negara)
                      (nomor telepon) +62 81770914xxxx
                    </p>
                    <p>
                      Notes : Dimohon untuk mengisi nomor ketua tim dengan
                      benar, untuk dimasukan kedalam group
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Masukan Nomor WhatsApp Ketua Tim"
                    required
                  />
                </div>
                <div class="input-box">
                  <label for="LEADER_EMAIL" class="form-label">
                    Alamat Email Ketua Tim
                  </label>
                  <label>
                    <p>
                      Notes : Dimohon untuk mengisi email dengan benar,
                      pengiriman LOA akan dikirim melalui email address ketua
                      tim yang di isi.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    class="form-control"
                    placeholder="Email Leader Tim"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="NISN_NIM" className="form-label">
                    NISN / NIM Ketua & Anggota Tim
                  </label>
                  <label>
                    <p>
                      Notes : Masukan NISN / NIM dengan sesuai urutan nama ketua
                      dan anggota tim, dengan format seperti berikut :
                    </p>
                    <h6>231700</h6>
                    <h6>241700</h6>
                    <h6>251700</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NISN_NIM"
                    name="NISN_NIM"
                    className="form-control"
                    placeholder="Masukan NISN / NIM Ketua & Anggota Tim"
                    required
                  ></textarea>
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">DATA SEKOLAH</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    Nama Sekolah/Universitas
                  </label>
                  <label>
                    <p>
                      Notes : Masukan nama sekolah dengan format sesuai urutan
                      nama ketua dan anggota tim asal sekolah masing - masing,
                      dengan format seperti berikut :
                    </p>
                    <h6>SMA CERIA</h6>
                    <h6>SMA BAHAGIA</h6>
                    <h6>SMA TADIKA MESRA</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Masukan Nama Sekolah/Universitas Anda"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="NPSN" className="form-label">
                    Nomor Pokok Sekolah Nasional (NPSN)
                  </label>
                  <label>
                    <p>
                      Notes : Masukan NPSN jika masi bersekolah dengan sesuai
                      urutan nama ketua dan anggota tim, dengan format seperti
                      berikut :
                    </p>
                    <h6>1201301</h6>
                    <h6>1302402</h6>
                    <h6>1020100</h6>
                  </label>
                  <textarea
                    type="number"
                    id="NPSN"
                    name="NPSN"
                    className="form-control"
                    placeholder="Masukan Nomor Pokok Sekolah Nasional (NPSN)"
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="GRADE" className="form-label">
                    Jenjang Pendidikan{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Choose Grade"
                    required
                  >
                    <option value="">--Pilih Jenjang Pendidikan Anda--</option>
                    <option value="Sekolah Dasar">Sekolah Dasar</option>
                    <option value="Sekolah Menengah Pertama">
                      Sekolah Menengah Pertama
                    </option>
                    <option value="Sekolah Menengah Atas">
                      Sekolah Menengah Atas
                    </option>
                    <option value="Universitas">Universitas</option>
                    <option value="Guru & PTK">Guru & PTK</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="PROVINCE" className="form-label">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="form-control"
                    placeholder="Masukan Provinsi Anda"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}
              {/* DATA SEKOLAH END */}

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">
                DATA PEMBIMBING
              </h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div class="input-box">
                  <label for="NAME_SUPERVISOR" class="form-label">
                    Nama Guru/Pembimbing
                  </label>
                  <textarea
                    type="text"
                    id="NAME_SUPERVISOR"
                    name="NAME_SUPERVISOR"
                    class="form-control"
                    placeholder="Masukan Nama Guru/Pembimbing"
                    required
                  ></textarea>
                </div>

                <div className="input-box">
                  <label
                    for="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-label"
                  >
                    Nomor WhatsApp Guru/Pembimbing
                  </label>
                  <label>
                    <p>
                      Harap tulis dengan kode telepon, contoh : (kode negara)
                      (nomor telepon) +62 81770914xxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_NUMBER_SUPERVISOR"
                    name="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-control"
                    placeholder="Masukan Nomor WhatsApp Guru/Pembimbing"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="EMAIL_TEACHER_SUPERVISOR" className="form-label">
                    Alamat Email Guru/Pembimbing
                  </label>
                  <input
                    type="email"
                    id="EMAIL_TEACHER_SUPERVISOR"
                    name="EMAIL_TEACHER_SUPERVISOR"
                    className="form-control"
                    placeholder="Alamat Email Guru/Pembimbing"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}

              {/* DETAIL PROJECT START */}
              {/* DETAIL PROJECT START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  DETAIL PROYEK
                </h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="PROJECT_TITLE" className="form-label">
                    Judul Proyek
                  </label>
                  <label>
                    <p>
                      Notes : Dimohon untuk mengisi data judul dengan BENAR,
                      data yang masuk sudah tidak bisa ada perubahan!
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="form-control"
                    placeholder="Masukkan Judul Proyek Anda"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                  ></textarea>
                  <p>
                    {selectedMaxProject.length} / {maxProjectChars} character
                  </p>
                </div>

                {/* Dropdown Kategori */}
                <div className="input-box">
                  <label htmlFor="CATEGORIES" className="form-label">
                    Kategori
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="form-control"
                    required
                    onChange={handleCategoryChange}
                  >
                   <option value="">--Pilih Kategori--</option>
                    <option value="Environment">Environment</option>
                    <option value="Robotics">Robotics</option>
                    <option value="Games">
                      Games
                    </option>
                    <option value="Computer">
                      Computer
                    </option>
                    <option value="Physics and Engineering">Physics and Engineering</option>
                    <option value="Design and Animation">Design and Animation</option>
                    <option value="Life Sciences">Life Sciences</option>
                  </select>
                </div>

                <div className="input-box">
                  <label for="YES_NO" className="form-label">
                    Apakah judul proyek pernah berpartisipasi dalam kompetisi
                    penemuan dan inovasi sebelumnya?
                  </label>
                  <select
                    type="text"
                    id="YES_NO"
                    name="YES_NO"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option>--Pilih--</option>
                    <option value="Yes">Iya</option>
                    <option value="No">Tidak</option>
                  </select>
                </div>

                <div className="input-box">
                  <label
                    for="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-label"
                  >
                    Jika judul proyek pernah mengikuti kompetisi invensi dan
                    inovasi lainnya, mohon tuliskan nama kompetisinya
                  </label>
                  <textarea
                    type="text"
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-control"
                    placeholder="Masukan Nama Kompetisinya"
                  ></textarea>
                  <div className="mt-5" id="form_alerts"></div>
                </div>
                {/* Kolom Harga */}
                <div className="input-box invisible">
                  <label htmlFor="CATEGORY_PRICE" className="form-label ">
                    Harga Pendaftaran
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PRICE"
                    name="CATEGORY_PRICE"
                    className="form-control"
                    value={categoryPrice}
                    readOnly
                    placeholder="Harga akan muncul berdasarkan kategori yang dipilih"
                  />
                </div>
              </div>
              {/* DETAIL PROJECT END */}
              {/* DETAIL PROJECT END */}

              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  INFORMASI UMUM
                </h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="COMPLETE_ADDRESS" className="form-label">
                    Alamat Lengkap
                  </label>
                  <label>
                    <p>
                      Mohon tuliskan alamat lengkap (Nama Jalan, Nomor Rumah,
                      RT&RW, Kecamatan, Kabupaten, Kota, Provinsi, Kode Pos)
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="form-control"
                    placeholder="Masukan Alamat Lengkap Anda"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="INFORMATION_RESOURCES" className="form-label">
                    Sumber Informasi Kompetisi WRCSO 2025
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Pilih Sumber Informasi--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="WRCSO Instagram">WRCSO Instagram</option>
                    <option value="Pembimbing/Sekolah">
                      Pembimbing/Sekolah
                    </option>
                    <option value="IYSA FaceBook">IYSA FaceBook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="WRCSO Website">WRCSO Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="WRCSO Email">WRCSO Email</option>
                    <option value="Acara Sebelumnya">Acara Sebelumnya</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="FILE" className="form-label">
                    Jika Anda mendapatkan pendaftaran gratis dari acara
                    sebelumnya atau kegiatan kunjungan sekolah sebelumnya, harap
                    lampirkan bukti dokumentasi{" "}
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="form-control"
                    placeholder="Upload Link File Drive"
                  />
                </div>
              </div>
              {/* GENERAL INFORMATION END */}
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="KIRIM" />
              </div>
            </form>

            {/* Loader dan Status Message */}
            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IndonesiaOnline;
