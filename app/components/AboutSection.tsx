import Image from "next/image";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import Photo2 from "../Image/photo_2024-10-04_02-42-58.jpg";
import "../css/AboutSection.css"

export default function AboutSection() {
  return (
    <section id="about" className="about-me">
      <div className="img">
        <Image src={Photo2} width={500} height={500} alt="Ivan's photo" className="img"/>
      </div>
      <br />
      <h1>About Me 🧔🏻‍♂️</h1>
      <br />
      <p>
        I'm Ivan, a motivated and result-driven front-end developer with
        experience in building and supporting web applications. My main stack
        includes React, Next.js, Tailwind CSS, and TypeScript.
      </p>
      <br />
      <h3>Tech Stack</h3>
      <div className="tech-stack">
        <FaHtml5 />
        <IoLogoCss3 />
        <FaJs />
        <BiLogoTypescript />
        <FaReact />
        <TbBrandNextjs />
      </div>
    </section>
  );
}
