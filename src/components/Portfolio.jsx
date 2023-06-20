import React from "react";
import styles from "../style";
import portfolio1 from "../assets/portfolio1.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="text-white text-center font-roboto pt-[110px] pb-[100px]"
    >
      <div className="grid ss:grid-cols-2 grid-cols-1 md:gap-[70px] gap-[50px]">
        <div>
          <h2 className={`${styles.heading2}`}>Portfolio</h2>
          <p className={`${styles.paragraph}`}>
            Please take a moment to browse through some of my recent projects.
            You will find examples of my work such as a digital marketer
            portfolio, a calorie calculator application and a current weather
            application.
          </p>
        </div>
        <div className={`${styles.portfolio_box} brightness-125`}>
          <a href="https://edoheyit.github.io/selmaportfolio/" target="_blank">
            <div className={`${styles.portfolio_img} bg-portfolio1`}></div>
          </a>
        </div>
        <div className={`${styles.portfolio_box}`}>
          <a href="https://edoheyit.github.io/Kalorije/" target="_blank">
            <div className={`${styles.portfolio_img} bg-portfolio2`}></div>
          </a>
        </div>
        <div className={`${styles.portfolio_box}`}>
          <a href="https://edoheyit.github.io/weather/" target="_blank">
            <div className={`${styles.portfolio_img} bg-portfolio3`}></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
