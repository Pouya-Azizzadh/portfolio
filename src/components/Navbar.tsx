import React, { PropsWithChildren, FC, useState } from "react";
import { icons } from "react-icons";

// assets
import { close, menu } from "../assets";

// icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface Props {
  className?: string;
  items: { href: string; title: string }[];
  logo?: any;
}

const Navbar: FC<Props> = ({ className, items, logo }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((flag) => !flag);
  };
  return (
    <div className="flex w-full justify-between py-6 ">
      <div>
        {logo && <img src={logo} alt="logo" className="w-[40px] h-[40px]" />}
      </div>

      <ul className="md:flex hidden list-none">
        {items.map((val) => (
          <li
            key={val.href}
            className="mr-8 font-medium	text-[20px] text-white leading-[29px] text-right"
          >
            <a href={val.href}>{val.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden  flex flex-col items-end">
        <div
          className="flex w-[25px] text-white z-10 text-[40px] mb-4 h-[25px] abslout top-0 left-0 object-contain"
          onClick={handleOpen}
        >
          {open ? (
            <AiOutlineClose className="w-full" />
          ) : (
            <AiOutlineMenu className="w-full" />
          )}
        </div>
        {open && (
          <ul className="md:hidden flex flex-col fixed top-[70px] bg-primary items-end rounded-[20px] py-8 px-4   nav-mobile list-none">
            {items.map((val) => (
              <li
                key={val.href}
                className=" font-medium my-4 text-white	text-[16px] leading-[29px] text-right"
              >
                <a href={val.href}>{val.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
//nav-mobile
export default Navbar;
