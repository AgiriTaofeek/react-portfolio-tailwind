import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8  w-full overflow-hidden  z-50">
      <div className="container mx-auto">
        <ul className="w-full bg-black/20  backdrop-blur-2xl rounded-full max-w-[28.75rem] mx-auto px-5 flex justify-between  items-center text-2xl text-white/50 py-5">
          <li>
            <Link
              to="home"
              className="cursor-pointer w-[3.75rem] h-[3.75rem] flex items-center justify-center"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              offset={-200}
            >
              <BiHomeAlt />
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="cursor-pointer w-[3.75rem] h-[3.75rem] flex items-center justify-center"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
            >
              <BiUser />
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className="cursor-pointer w-[3.75rem] h-[3.75rem] flex items-center justify-center"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
            >
              <BsClipboardData />
            </Link>
          </li>
          <li>
            <Link
              to="work"
              className="cursor-pointer w-[3.75rem] h-[3.75rem] flex items-center justify-center"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
            >
              <BsBriefcase />
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="cursor-pointer w-[3.75rem] h-[3.75rem] flex items-center justify-center"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
            >
              <BsChatSquare />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
