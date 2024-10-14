import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fotter">
      <p>Copyright © 2024. All rights reserved</p>
      <Link target="_blank" href="https://github.com/Ivan984-lang">
        <FaGithub className="git" />
      </Link>
    </footer>
  );
}
