import React from "react";
import styles from "../style";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reacti from "../assets/reacti.png";
import tailwindi from "../assets/tailwindi.svg";
import sass from "../assets/sass.png";
import gsap from "../assets/gsap.webp";
import mui from "../assets/mui.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white text-center pt-[50px] pb-[160px] font-roboto"
    >
      <h2 className={`${styles.heading2}`}>My Web Developer Skills</h2>
      <p className={`${styles.paragraph} max-w-5xl m-auto`}>
        I possess a diverse set of web development skills that enable me to
        create dynamic and visually appealing websites. With a strong foundation
        in front-end technologies, I bring a comprehensive approach to building
        user-friendly web applications.
      </p>
      <div className="grid ss:grid-cols-4 grid-cols-2 ss:gap-[90px] gap-[60px] max-w-3xl pt-[90px] m-auto">
        <div>
          <div className={`${styles.skills_box}`}>
            <img
              src={html}
              className={`${styles.skills_icon}`}
              alt="html icon"
            />
          </div>
          <p>HTML</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img src={css} className={`${styles.skills_icon}`} alt="css icon" />
          </div>
          <p>CSS</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img src={js} className={`${styles.skills_icon}`} alt="js icon" />
          </div>
          <p>JAVASCRIPT</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img
              src={reacti}
              className={`${styles.skills_icon}`}
              alt="react icon"
            />
          </div>
          <p>REACT</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img
              src={tailwindi}
              className={`${styles.skills_icon} pt-5`}
              alt="tailwind icon"
            />
          </div>
          <p>TAILWIND</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img
              src={sass}
              className={`${styles.skills_icon} w-[97px]`}
              alt="sass icon"
            />
          </div>
          <p>SASS</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img src={mui} className={`${styles.skills_icon}`} alt="mui icon" />
          </div>
          <p>MUI</p>
        </div>
        <div>
          <div className={`${styles.skills_box}`}>
            <img
              src={gsap}
              className={`${styles.skills_icon}`}
              alt="gsap icon"
            />
          </div>
          <p>GSAP</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
