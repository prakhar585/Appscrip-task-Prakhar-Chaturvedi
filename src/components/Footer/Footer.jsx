import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import usFlag from "../../../public/assets/images/usFlag.png";
// import usFlag from "../../../public/assets/images/usFlag.svg"; // example
import gpay from "../../../public/assets/images/GPay-logo.png";
import mastercard from "../../../public/assets/images/Mastercard-logo.png";
import Paypal from "../../../public/assets/images/paypal-logo.png";
import amex from "../../../public/assets/images/Amex-logo.png";
import applepay from "../../../public/assets/images/apple-pay-logo.png";
import Pay from "../../../public/assets/images/pay-logo.png";
import instagram from "../../../public/assets/images/instagram.png";
import linkedIn from "../../../public/assets/images/linkedIn.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [accordions, setAccordions] = useState({
    metta: false,
    quick: false,
    follow: false,
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (key) => {
    setAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Subscribe */}
       
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact & Currency */}
        <div className={styles.contactCurrency}>
          <div>
            <h4>CALL US</h4>
            <p>+44 221 133 5360 • customercare@mettamuse.com</p>
          </div>
          <div>
            <h4>CURRENCY</h4>
            <div className={styles.currency}>
              <Image src={usFlag} alt="USD" width={20} height={15} />
              <span>USD</span>
            </div>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>
    
      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
      <div className={styles.bottomSectionDiv}>
        {/* metta muse */}
        
        <div className={styles.linksColumn1}>
          <div
            className={styles.accordionHeader}
            onClick={() => isMobile && toggleAccordion("metta")}
          >
            <div className={styles.heading}>
              <h4>metta muse</h4>
              {isMobile && (
                <span className={styles.accordianLogo}>
                  {accordions.metta ? "<" : ">"}
                </span>
              )}
            </div>
          </div>
          {(accordions.metta || !isMobile) && (
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
        </div>
            <hr className={styles.divider} />
        {/* Quick Links */}
        <div className={styles.linksColumn2}>
          <div
            className={styles.accordionHeader}
            onClick={() => isMobile && toggleAccordion("quick")}
          >
            <div className={styles.heading}>
              <h4>QUICK LINKS</h4>
              {isMobile && (
                <span className={styles.accordianLogo}>
                  {accordions.quick ? "<" : ">"}
                </span>
              )}
            </div>
          </div>
          {(accordions.quick || !isMobile) && (
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
        </div>
          <hr className={styles.divider} />
        {/* Follow Us */}
        <div className={styles.linksColumn3}>
          <div
            className={styles.accordionHeader}
            onClick={() => isMobile && toggleAccordion("follow")}
          >
            {" "}
            <div className={styles.heading}>
              <h4>FOLLOW US</h4>
              {isMobile && (
                <span className={styles.accordianLogo}>
                  {accordions.follow ? "<" : ">"}
                </span>
              )}
            </div>
          </div>
          {(accordions.follow || !isMobile) && (
            <>
              <div className={styles.socialIcons}>
                <span className={styles.icon}><Image src={instagram} alt="Instagram" height={16} width={16}></Image></span>
                <span className={styles.icon}><Image src={linkedIn} alt=" Linkedin" height={16} width={16}></Image></span>
              </div>

              <h4>metta muse ACCEPTS</h4>
              <div className={styles.paymentsGrid}>
                <div className={styles.payments}>
                  <Image src={gpay} alt="Google Pay" width={35} height={13} />
                </div>
                <div className={styles.payments}>
                  <Image
                    src={mastercard}
                    alt="Mastercard"
                    width={31}
                    height={20}
                  />
                </div>
                <div className={styles.payments}>
                  <Image src={Paypal} alt="Paypal" width={15} height={19} />
                </div>
                <div className={styles.payments} id={styles.amex}>
                  <Image src={amex} alt="American express" width={43} height={11} />
                </div>
                <div className={styles.payments}>
                  <Image
                    src={applepay}
                    alt="Apple Pay"
                    width={40}
                    height={16}
                  />
                </div>
                <div className={styles.payments} id={styles.pay}>
                  <Image src={Pay} alt="Pay" width={40} height={16} />
                </div>
              </div>
            </>
          )}
        </div>
        </div>
      </div>
            <hr className={styles.divider} /> 
      {/* Bottom Copyright */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
