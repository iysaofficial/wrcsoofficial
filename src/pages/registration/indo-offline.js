import Navigation from "../../components/Navigation";
import Footer from '../../components/Footer';
import '../../css/Regist.css';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IndonesiaOffline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // maximum character limit
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const [selectedNamaSekolah, setselectedNamaSekolah] = useState("");
  const maxSchoolChars = 500; // maximum character limit
  const maxProjectChars = 160; // maximum character limit
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputNameSchoolChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxSchoolChars) {
      setselectedNamaSekolah(value);
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

    // Logic to determine the price based on the selected category
    switch (value) {
      case "World Robotics & Computer Science Olympiad - Offline Competition":
        setCategoryPrice("RP 3.500.000");
        break;
      // case "World Robotics & Computer Science Olympiad - Offline Competition + Excursion":
        break;
      default:
        setCategoryPrice("");
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");

    if (!termsAccepted) {
      alert("You must agree to the Terms & Conditions first.");
      navigate("/homeindo"); // Navigate to the HomeIndo page
    }
  }, [navigate]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyYsWxIeLzv1uAs8q3rAzpcGAYekIiAZMBZCmYUQtxC8LEugHAUaR6k2OHqcnRN3HE8/exec";

  useEffect(() => {
    const form = document.forms["regist-form"];

    if (form) {
      const handleSubmit = async (e) => {
        
        e.preventDefault();
        setShowModal(true);
        setCanClick(false);
        setCountdown(5); // Reset countdown when modal appears

        let count = 5;
        const interval = setInterval(() => {
          count -= 1;
          setCountdown(count);

          if (count <= 1) {
            clearInterval(interval); // Stop the countdown at 1
            setCanClick(true);
          }
        }, 1000);
      };

      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const handleConfirmSubmit = async () => {
    setShowModal(false); // Close modal
    const form = document.forms["regist-form"];
    console.log(new FormData(form));

    if (!form) return;

    setIsLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusMessage("Data sent successfully!");

        // Get data before reset
        const formData = {
          namaLengkap: selectedMaxNamaLengkap,
          projectTitle: selectedMaxProject,
          category: selectedCategory,
          categoryPrice: categoryPrice,
          namasekolah: selectedNamaSekolah,
        };

        form.reset();
        setTimeout(() => {
          navigate("/thankyou", { state: formData });
        }, 1000);
      } else {
        setStatusMessage("An error occurred while sending data.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while sending data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <section className="registration-section">
        <div class="container">
          <div class="content">
            <div class="sub">REGISTRATION FORM</div>
            <h1 class="garis-bawah">&nbsp;</h1>
            <br />
            <br />
            <h4 className='text-xl'>
              HELLO WRCSO 2026 PARTICIPANTS, Please pay attention to the following information
              before filling out the registration form:
            </h4>
            <br />
            <p>
              1. Please fill in the required data correctly and make sure
              there are no spelling errors. Also make sure that the data sent
              is final and has not changed.
            </p>
            <p>
              2. After making sure the data is correct, you can click the
              <span className="fw-bold"> "SEND"</span> button just once.
              If the data has been successfully sent, you will be moved
              to another page.
            </p>
            <p>
              3. There will be an information email that the registration has been received which
              will be sent to the team leader's email address, and the documents will be validated
              by our team. Please be patient and wait a maximum of 3 days after
              the registration time, the Letter of Acceptance (LOA) will be sent to
              the team leader's email address.
            </p>
            <br />

            {showModal && (
              <div className="modal-overlay-submit">
                <div className="modal-submit text-lg-center text-md-center">
                  <h2 className="text-center">⚠️ATTENTION!</h2>
                  <p>
                    Data that has been sent cannot be changed. The committee
                    will use the last data entered for printing the
                    certificate.
                    <br />
                    <b>MAKE SURE ALL DATA IS CORRECT!</b>
                    <br />
                    <b>
                      DO NOT RE-REGISTER WITH THE SAME DATA REPEATEDLY!
                    </b>
                  </p>
                  <div className="modal-buttons-submit">
                    <button onClick={() => setShowModal(false)}>Back</button>
                    <button
                      onClick={handleConfirmSubmit}
                      disabled={!canClick || isLoading}
                    >
                      {isLoading
                        ? "Submitting..."
                        : canClick
                        ? "Continue"
                        : `Please wait... ${countdown}`}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form name="regist-form">
              <h1 className='text-sm md:text-lg lg:text-5xl'>BIODATA</h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Indonesian Participants">
                    Participant Category
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="INDONESIAN PARTICIPANT"
                    readOnly
                  />
                </div>
                <div class="input-box">
                  <label for="CATEGORY_COMPETITION" class="form-label">
                    Competition Category
                  </label>
                  <select
                    type="text"
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    class="form-control"
                    placeholder="Choose Category Competition "
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">--Select Competition Category--</option>
                    <option value="World Robotics & Computer Science Olympiad - Offline Competition">
                      Offline Competition
                    </option>
                    {/* <option value="World Robotics & Computer Science Olympiad - Offline Competition + Excursion">
                      Offline Competition + Excursion
                    </option> */}
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Team Leader & Member Names
                  </label>
                  <label>
                    <p>
                      Enter the names of the team leader and members with the team leader's name
                      first, in the following format:
                    </p>
                    <p>Note: maximum 5 members + 1 team leader</p>
                    <h6>Kamal Putra Simatupang</h6>
                    <h6>Zaidan Prasetya</h6>
                    <h6>Eki Jordi</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Enter Leader & Member Names"
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
                    Team Leader's WhatsApp Number
                  </label>
                  <label>
                    <p>
                      Please write with the country code, for example: (country code)
                      (phone number) +62 81770914xxxx
                    </p>
                    <p>
                      Notes: Please fill in the team leader's number correctly,
                      to be added to the group.
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Enter Team Leader's WhatsApp Number"
                    required
                  />
                </div>
                <div class="input-box">
                  <label for="LEADER_EMAIL" class="form-label">
                    Team Leader's Email Address
                  </label>
                  <label>
                    <p>
                      Notes: Please fill in the email correctly,
                      the LOA will be sent to the team leader's email address
                      that is filled in.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    class="form-control"
                    placeholder="Team Leader's Email"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="NISN_NIM" className="form-label">
                    Student ID Number (NISN / NIM) of Leader & Members
                  </label>
                  <label>
                    <p>
                      Notes: Enter the NISN / NIM according to the order of the names of the team leader
                      and members, in the following format:
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
                    placeholder="Enter NISN / NIM of Leader & Members"
                    required
                  ></textarea>
                </div>
              </div>

              {/* SCHOOL DATA START */}
              <h1 className='text-sm md:text-lg lg:text-5xl'>SCHOOL DATA</h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    School/University Name
                  </label>
                  <label>
                    <p>
                      Notes: Enter the school name in the format according to the order
                      of the names of the team leader and members from their respective schools,
                      in the following format:
                    </p>
                    <h6>CERIA HIGH SCHOOL</h6>
                    <h6>BAHAGIA HIGH SCHOOL</h6>
                    <h6>TADIKA MESRA HIGH SCHOOL</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Enter Your School/University Name"
                    required
                    value={selectedNamaSekolah}
                    onChange={handleInputNameSchoolChange}
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="NPSN" className="form-label">
                    National School Identification Number (NPSN)
                  </label>
                  <label>
                    <p>
                      Notes: Enter the NPSN if you are still in school according to the
                      order of the names of the team leader and members, in the following format:
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
                    placeholder="Enter National School Identification Number (NPSN)"
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="GRADE" className="form-label">
                    Educational Level{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Choose Grade"
                    required
                  >
                    <option value="">--Select Your Educational Level--</option>
                    <option value="Sekolah Dasar">Elementary School</option>
                    <option value="Sekolah Menengah Pertama">
                      Junior High School
                    </option>
                    <option value="Sekolah Menengah Atas">
                      Senior High School
                    </option>
                    <option value="Universitas">University</option>
                    <option value="Public">Public</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="PROVINCE" className="form-label">
                    Province
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="form-control"
                    placeholder="Enter Your Province"
                    required
                  />
                </div>
              </div>
              {/* SCHOOL DATA END */}

              {/* SUPERVISOR DATA START */}
              <h1 className='text-sm md:text-lg lg:text-5xl'>SUPERVISOR DATA</h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div class="input-box">
                  <label for="NAME_SUPERVISOR" class="form-label">
                    Teacher/Supervisor Name
                  </label>
                  <textarea
                    type="text"
                    id="NAME_SUPERVISOR"
                    name="NAME_SUPERVISOR"
                    class="form-control"
                    placeholder="Enter Teacher/Supervisor Name"
                    required
                  ></textarea>
                </div>

                <div className="input-box">
                  <label
                    for="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-label"
                  >
                    Teacher/Supervisor's WhatsApp Number
                  </label>
                  <label>
                    <p>
                      Please write with the country code, for example: (country code)
                      (phone number) +62 81770914xxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_NUMBER_SUPERVISOR"
                    name="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-control"
                    placeholder="Enter Teacher/Supervisor's WhatsApp Number"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="EMAIL_TEACHER_SUPERVISOR" className="form-label">
                    Teacher/Supervisor's Email Address
                  </label>
                  <input
                    type="email"
                    id="EMAIL_TEACHER_SUPERVISOR"
                    name="EMAIL_TEACHER_SUPERVISOR"
                    className="form-control"
                    placeholder="Teacher/Supervisor's Email Address"
                    required
                  />
                </div>
              </div>
              {/* SUPERVISOR DATA END */}

              {/* PROJECT DETAILS START */}
              <div className="">
                <h1 className='text-sm md:text-lg lg:text-5xl'>PROJECT DETAILS</h1>
                <h1 className="garis-bawah">&nbsp;</h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="PROJECT_TITLE" className="form-label">
                    Project Title
                  </label>
                  <label>
                    <p>
                      Notes: Please fill in the project title data CORRECTLY,
                      the data entered cannot be changed!
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="form-control"
                    placeholder="Enter Your Project Title"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                  ></textarea>
                  <p>
                    {selectedMaxProject.length} / {maxProjectChars} character
                  </p>
                </div>

                {/* Category Dropdown */}
                <div className="input-box">
                  <label htmlFor="CATEGORIES" className="form-label">
                    Category
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="form-control"
                    placeholder="--Choose-- "
                    required
                  >
                    <option value="">--Select Category--</option>
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
                    Has the project title ever participated in a previous
                    invention and innovation competition?
                  </label>
                  <select
                    type="text"
                    id="YES_NO"
                    name="YES_NO"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option>--Select--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-box">
                  <label
                    for="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-label"
                  >
                    If the project title has participated in other invention and
                    innovation competitions, please write down the name of the competition
                  </label>
                  <textarea
                    type="text"
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-control"
                    placeholder="Enter the Name of the Competition"
                  ></textarea>
                  <div className="mt-5" id="form_alerts"></div>
                </div>
                {/* Price Column */}
                <div className="input-box invisible">
                  <label htmlFor="CATEGORY_PRICE" className="form-label ">
                    Registration Fee
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PRICE"
                    name="CATEGORY_PRICE"
                    className="form-control"
                    value={categoryPrice}
                    readOnly
                    placeholder="Price will appear based on the selected category"
                  />
                </div>
              </div>
              {/* PROJECT DETAILS END */}

              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1 className='text-sm md:text-lg lg:text-5xl'>GENERAL INFORMATION</h1>
                <h1 className="garis-bawah">&nbsp;</h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="COMPLETE_ADDRESS" className="form-label">
                    Complete Address
                  </label>
                  <label>
                    <p>
                      Please write down the complete address (Street Name, House Number,
                      RT&RW, District, Regency, City, Province, Postal Code)
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="form-control"
                    placeholder="Enter Your Complete Address"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="INFORMATION_RESOURCES" className="form-label">
                    WRCSO 2026 Competition Information Resources
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Select Information Source--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="WRCSO Instagram">WRCSO Instagram</option>
                    <option value="Pembimbing/Sekolah">
                      Supervisor/School
                    </option>
                    <option value="IYSA Facebook">IYSA Facebook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="WRCSO Website">WRCSO Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="WRCSO Email">WRCSO Email</option>
                    <option value="Acara Sebelumnya">Previous Event</option>
                    <option value="Lainnya">Other</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="FILE" className="form-label">
                    If you received free registration from a previous event
                    or school visit, please
                    attach proof of documentation{" "}
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="form-control"
                    placeholder="Upload Drive File Link"
                  />
                </div>
              </div>
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="SEND" />
              </div>
            </form>
            {/* Loader and Status Message */}
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

export default IndonesiaOffline;
