import { GrMapLocation } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import "../css/ContactSection.css"

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <br />
      <p>Don't be shy! Hit me up! 👇🏻</p>
      <br />
      <GrMapLocation className="icon" />
      <p>Location: Ukraine</p>
      <br />
      <IoMdMail className="icon" />
      <p>Email: zhabkoivan9@gmail.com</p>
      <br />
      <FaPhoneFlip className="icon" />
      <p>Phone: +380686367233</p>
      <br />
    </section>
  );
}
