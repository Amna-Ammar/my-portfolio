import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";


const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    //setActive(!isActive);
    //document.body.classList.toggle("ovhidden");
    //this.classList.add("active");
    //};
    this.classList.add("active");
    const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      //console.log(i, 'qqqqqq', navList, a)
      a.addEventListener("click", function () {
        for (let k = 0; k < totalSection; k++) {
          allSection[k].classList.remove("back-section");
        }
        //Loop for removing active class
        for (let j = 0; j < totalNavList; j++) {
          if (navList[j].querySelector("a").classList.contains("active")) {
            allSection[j].classList.add("back-section");
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        //Adding active class
        this.classList.add("active");
        showSection(this); //Function call
        //Nav click event - Hiding the nav menu
        if (window.innerWidth < 1200) {
          asideSectionTogglerBtn();
        }
      });
    }

    function showSection(element) {
      const allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
      console.log("LELEMENT", element)
      //Loop for removing active class
      for (let k = 0; k < totalSection; k++) {
        allSection[k].classList.remove("active");
      }
      const target = element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("active");
    }
  };
  // //For Hire me section
  // document.querySelector(".hire-me").addEventListener("click", function () {
  //   showSection(this);
  //   updateNav(this);
  // });

  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector("a").classList.remove("active");
  //     const target = element.getAttribute("href").split("#")[1];
  //     if (
  //       target ===
  //       navList[i].querySelector("a").getAttribute("href").split("#")[1]
  //     ) {
  //       navList[i].querySelector("a").classList.add("active");
  //     }
  //   }
  // }

  // //For Nav Toggler Button
  // const navTogglerBtn = document.querySelector(".nav-toggler"),
  //   aside = document.querySelector(".aside");
  // navTogglerBtn.addEventListener("click", () => {
  //   asideSectionTogglerBtn();
  // });

  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
  }
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">

          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={asideSectionTogglerBtn}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>

          </div>
        </div>

        <div className="aside ">
          <div className="logo">
            <Link to="index.html"><span>A</span>mna</Link>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
          <ul className="nav">
            <li>
              <Link to="/home" className="active"><i className="fa fa-home"></i> Home</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/about" ><i className="fa fa-user"></i> About</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/service"><i className="fa fa-list"></i> Services</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/portfolio"><i className="fa fa-briefcase"></i> Portfolio</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/blog"><i className="fa-brands fa-readme"></i> Blog</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/contact"> <i className="fa fa-comments"></i>Contact</Link>
            </li>

          </ul>
          <div className='tagtop'>
            Made with <a href='#' className='fa fa-heart heart'></a> by me.
          </div>
        </div>

      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}

    </>
  );
};

export default Headermain;
