import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import edohome from "../assets/edohome.png";

const Home = () => {
  useEffect(() => {
    let homeText = gsap.timeline();
    homeText.from(".animation", {
      x: 300,
      opacity: 0,
      delay: 1.3,
      stagger: {
        amount: 2,
      },
    });
  }, []);

  useEffect(() => {
    let spanText = gsap.timeline();
    spanText.from(".spanAnimation", {
      delay: 2,
      y: 100,
      stagger: {
        each: 0.07,
      },
    });
  }, []);

  return (
    <section className="text-secondary ss:flex block justify-center items-center ss:mt-[150px]">
      <div className="ss:absolute ss:left-[50%]">
        <img className="ss:h-[650px]" src={edohome} alt="" />
      </div>
      <div className="flex flex-col ss:text-8xl ss:pt-0 pt-5 text-5xl pb-[60px] text-secondary font-roboto ss:w-[800px]">
        <div className="flex animation pb-4">
          {"Hello, I'm".split("").map((word, i) => {
            return word === " " ? (
              <div className="spanAnimation" key={i}>
                &nbsp;
              </div>
            ) : (
              <div className="spanAnimation" key={i}>
                {word}
              </div>
            );
          })}
        </div>
        <div className="flex animation pb-4">
          {"Edo Mehinagić".split("").map((word, i) => {
            return word === " " ? (
              <div className="spanAnimation" key={i}>
                &nbsp;
              </div>
            ) : (
              <div className="spanAnimation" key={i}>
                {word}
              </div>
            );
          })}
        </div>
        <div className="flex animation pb-4">
          {"Web Developer".split("").map((word, i) => {
            return word === " " ? (
              <div className="spanAnimation" key={i}>
                &nbsp;
              </div>
            ) : (
              <div className="spanAnimation" key={i}>
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
