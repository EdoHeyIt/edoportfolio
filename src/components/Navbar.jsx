import React from "react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-scroll";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let navText = gsap.timeline();
    navText.from(".revealAnimation", {
      delay: 0.3,
      y: -100,
      stagger: {
        each: 0.09,
      },
    });
  }, []);

  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar"
      id="home"
    >
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 z-[10]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="cursor-pointer text-[26px] text-dimWhite hover:text-secondary mr-10 revealAnimation"
          >
            <Link className="nav-animation" to={`${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain revealAnimation pr-1"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-secondary`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
