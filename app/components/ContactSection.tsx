import { GrMapLocation } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <p>Don't be shy! Hit me up! 👇🏻</p>
      <GrMapLocation className="icon" />
      <p>Location: Ukraine</p>
      <IoMdMail className="icon" />
      <p>Email: zhabkoivan9@gmail.com</p>
      <FaPhoneFlip className="icon" />
      <p>Phone: +380686367233</p>
    </section>
  );
}
