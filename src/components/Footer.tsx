import React from "react";
// icons
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const connection = [
  { icon: <AiOutlineTwitter />, link: "#" },
  { icon: <AiFillInstagram />, link: "https://www.instagram.com/pouya_azizzade77" },
  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/pouya-azizzade-b18492272" },
  { icon: <AiOutlineGithub />, link: 'https://github.com/Pouya-Azizzadh' },
  { icon: <FaTelegram />, link: "https://t.me/PouyaA7731" },
];

const Footer = () => {
  return (
    <div className="flexCenter w-full py-8">
      {connection.map((item) => {
        return <a href={item.link} className="text-2xl text-white mx-4" target='_blank'>{item.icon}</a>;
      })}
    </div>
  );
};
export default Footer;
