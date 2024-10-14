"use client";  // Add this directive

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Photo from "../app/photo_2024-10-04_02-42-44.jpg"
import Photo2 from "../app/photo_2024-10-04_02-42-58.jpg"
import { FaGithub } from "react-icons/fa"
import { GrMapLocation } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6"
import Image from "next/image";

import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5"
import { FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi"
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";


export default function Home() {
  const [burger, setBurger] = useState(true);

  function openBurger() {
    setBurger(!burger);
    document.body.classList.toggle("overflow-hidden", !burger);
  }

  return (
    <div>
      <header className="header">
        <h1>Ivan.dev</h1>
        <nav>
          {!burger ? (
            <IoMdClose className="burger" onClick={openBurger} />
          ) : (
            <GiHamburgerMenu className="burger" onClick={openBurger} />
          )}
          {!burger ? <div className="burger-menu">
           <Link href="#home">Home</Link>
           <Link href="#about">About</Link>
           <Link href="#project">Project</Link>
           <Link href="#contact">Contact</Link>
          </div> : null}
        </nav>
      </header>
      <main>
        <section id="home" className="content">
        <div className="img">
         <Image
      src={Photo}
      width={500}
      height={500}
      alt="Picture of the author"
      className="img"
      
      
    />
     </div>

          <h1 className="title">Front-End React
          Developer 👋
          </h1>
      <p >Hi, I'm Ivan Zhabko. A passionate Front-end React Developer based in Ukraine. 📍</p>
      <div className="photo"></div>
      <div className="div">
        <Link target="_blank" href="https://github.com/Ivan984-lang"><span><FaGithub  className="github"/></span></Link>
      </div>
        </section>
        <section>
         <div className="img3">
         <Image
      src={Photo2}
      width={500}
      height={500}
      alt="Picture of the author"
      className="img2"
      
    />
         </div>
         <div className="about-me" id="about">
          <h1 className="title-2">About Me 🧔🏻‍♂️</h1>
          <p className="text">My name's Ivan and I motivated and result-driven front-end dev. I have experience and skills to creating applications from scratch and supporting projects in the future.</p>
          <p className="text">My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
          <p className="text-text">Tech Stack</p>
          <div>
            <FaHtml5 className="html"/>
            <IoLogoCss3 className="css"/>
            <FaJs className="js"/>
            <BiLogoTypescript className="ts"/>
            <FaReact className="react"/>
            <TbBrandNextjs className="nextjs"/>
          </div>
         </div>
        </section>
        <section id="project">
          <h1 className="project">Projects coming soon.. </h1>
        </section>
        <section className="contact" id="contact">
          <h1>CONTACT</h1>
          <p>Don't be shy! Hit me up! 👇🏻</p>
          <br />
        <GrMapLocation className="map"/>
        <br />
        <br />
        <p>Location</p>
        <br />
        <p className="gray">Ukraine</p>
             <br /><br />
         <IoMdMail className="email"/>
         <br />
         <br />
         <p>Mail</p>
         <br />
         <p className="mail">zhabkoivan9@gmail.com</p>
         <br /><br />
         <FaPhoneFlip className="phone"/>
         <br/><br />
         <p>Phone</p>
         <br />
         <p className="iphone">+380686367233</p>
        </section>
      </main>
      <footer className="fotter">
        <p>Copyright © 2024. All rights are reserved</p>
        <br />
        <Link target="_blank" href="https://github.com/Ivan984-lang"><FaGithub className="git"/></Link>
      </footer>
    </div>
  );
}
