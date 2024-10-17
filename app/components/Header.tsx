"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";


export default function Header() {
  const [burger, setBurger] = useState(true);
  const [slose, setSlose] = useState(true)

  function toggleMenu() {
    setBurger(!burger);
    document.body.classList.toggle("overflow-hidden", !burger);
  }
  function slose1() {
    setBurger(!slose);
    document.body.classList.toggle("display-none", !slose);
  }

  return (
    <header className="header">
      <h1>Ivan.dev</h1>
      <nav>
        {burger ? (
          <GiHamburgerMenu className="burger" onClick={toggleMenu} />
        ) : (
          <>
            <IoMdClose className="burger" onClick={toggleMenu} />
            <div className="burger-menu">
              <Link href="#home" onClick={slose1}>Home</Link>
              <Link href="#about" onClick={slose1}>About</Link>
              <Link href="#project" onClick={slose1} >Project</Link>
              <Link href="#contact" onClick={slose1}>Contact</Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
