import React from "react";
import edoAbout from "../assets/edoAbout.jpg";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import styles from "../style.js";

const About = () => {
  return (
    <section
      id="about"
      className="flex text-secondary ss:pt-[240px] pt-[120px] pb-[180px] font-roboto"
    >
      <div className="sm:flex block justify-center items-center m-auto">
        <div className="ss:pr-[50px]">
          <div>
            <img
              className="rounded-full ss:min-w-[280px] ss:max-w-[280px] min-w-[250px] max-w-[250px] border-solid border-4 border-indigo-600 m-auto"
              src={edoAbout}
              alt="edo photo"
            />
          </div>
          <div className="flex justify-center items-center pt-5 space-x-4">
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
        </div>
        <div className="ss:pt-0 pt-6 ss:ml-12">
          <h2 className={`${styles.heading2}`}>About Me</h2>
          <p className={`${styles.paragraph}`}>
            I am a self-taught web developer with a deep love for crafting
            beautiful and functional digital experiences. Through countless
            hours of exploration, experimentation, and dedication, I have honed
            my skills, bringing ideas to life with code. My journey as a
            self-taught developer began with an insatiable curiosity and an
            eagerness to dive into the world of web development. I immersed
            myself in online tutorials, coding challenges, and open-source
            projects, embracing every opportunity to expand my knowledge and
            improve my abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
