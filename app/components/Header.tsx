"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  const [burger, setBurger] = useState(true);

  function toggleMenu() {
    setBurger(!burger);
    document.body.classList.toggle("overflow-hidden", !burger);
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
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#project">Project</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
