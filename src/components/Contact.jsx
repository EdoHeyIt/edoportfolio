import React from "react";
import styles from "../style";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid sm:grid-cols-2 grid-cols-1 font-roboto mt-[120px] text-dimWhite md:pl-[130px] md:pr-[110px] pb-12 text-center"
    >
      <div className="sm:pb-0 pb-7">
        <h2 className={`${styles.heading2} text-left`}>Contact Me</h2>
        <p className={`${styles.paragraph} text-left`}>
          If you have any questions or would like to discuss a potential
          collaboration, please feel free to reach out to me using the contact
          information. I strive to respond promptly and look forward to the
          opportunity to discuss how I can assist you. Thank you for your
          interest and taking the time to visit my website.
        </p>
      </div>
      <div
        className={`${styles.paragraph} flex flex-col justify-center ss:pl-12 items-center leading-9`}
      >
        <div className="flex justify-center items-center pt-5 space-x-4 pb-5">
          <a href="https://github.com/EdoHeyIt" target="_blank">
            <img
              className="w-[35px] hover:animate-bounce cursor-pointer"
              src={github}
              alt="github"
            />
          </a>
          <a href="https://www.instagram.com/edo_heya/" target="_blank">
            <img
              className="w-[37px] hover:animate-bounce cursor-pointer"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://www.facebook.com/edo.mehinagic/" target="_blank">
            <img
              className="w-[35px] hover:animate-bounce cursor-pointer"
              src={facebook}
              alt="facebook"
            />
          </a>
        </div>
        <p>Edo Mehinagic</p>
        <p>Sarajevo, BiH</p>
        <p>edoheyit@gmail.com</p>
        <p>+387603059176</p>
      </div>
    </section>
  );
};

export default Contact;
