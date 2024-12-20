
import "../css/Contact.css";

import React, { useEffect } from 'react';


function Contact() {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        // Cleanup function to remove event listeners
        return () => {
            inputs.forEach(input => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    
  
    return (
      <>
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1 className='fw-bold'>Contact</h1>
        <a className='fw-bold' href="/">Home</a>
      </div>
    {/* PAGE HEADER END */}
    
            <section className='contact-section' id='contact'>
            <div className="container1">
                {/* <span className="big-circle"></span> */}
                {/* <img src="./assets/images/shape.png" alt="" className="square"/> */}
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title fw-bold">Lets get in touch</h3>
                        <p>
                        <p>
                            Feel free to contact us. We are here to assist you with all your needs.
                        </p>

                        </p>

                        <div className="info">
                            <div className="information">
                                <img src="./assets/images/icon/location.png" className="contact-icon" alt="" />
                                <a href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang No. 63 RT 03 RW 06</a>
                            </div>
                            <div className="information">
                                <img src="./assets/images/icon/email.png" className="contact-icon" alt="" />
                                <a href='mailto:yk.ollympiad@gmail.com' target='_blank'>wrsco.official@gmail.com</a>
                            </div>
                            <div className="information">
                                <img src="./assets/images/icon/phone.png" className="contact-icon" alt="" />
                                <a href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</a>
                            </div>
 
                        </div>

                        <div className="social-media">
                            <p className='fw-bold'>Connect with us :</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/iyc.olympiad/" target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.tiktok.com/@iysa.official" target='_blank'>
                                    <i className="fab fa-tiktok"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>
                    
                        <form action="https://formspree.io/f/xwpkjjvl" autoComplete='off' method='POST'>
                            <h3 className="title fw-bold">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" required/>
                                <label htmlFor="">name</label>
                                <span>name</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" required/>
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" required></textarea>
                                <label htmlFor="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value={"Send"} className="btn fw-bold"/>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}   
  
  export default Contact;