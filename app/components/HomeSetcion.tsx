import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Photo from "../Image/photo_2024-10-04_02-42-44.jpg";
import "../css/HomeSection.css"


export default function HomeSection() {
  return (
    <section id="home" className="content">
      <div className="img">
        <Image src={Photo} width={500} height={500} className="img" alt="" />
      </div>
      <h1 className="title">Front-End React Developer 👋</h1>
      <p>
        Hi, I'm Ivan Zhabko. A passionate Front-end React Developer based in
        Ukraine. 📍
      </p>
      <Link target="_blank" href="https://github.com/Ivan984-lang">
        <FaGithub className="github" />
      </Link>
    </section>
  );
}
