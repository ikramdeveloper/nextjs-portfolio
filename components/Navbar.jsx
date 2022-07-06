import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import images from "../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShadow, setIsShadow] = useState(false);

  const handleNav = () => setIsActive((prev) => !prev);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        isShadow
          ? "shadow-xl ease-in-out duration-300 fixed w-full h-20 z-50 bg-gray-100"
          : "fixed w-full h-20 z-50 bg-gray-100"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image src={images.NavLogo} alt="logo" width="125" height="50" />
          </a>
        </Link>

        <article>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div className="md:hidden text-[#1f2937]" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </article>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          isActive
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Side drawer menu */}
        <article
          className={
            isActive
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <section>
            <figure className="flex items-center justify-between w-full ">
              <Link href="/">
                <a>
                  <Image
                    src={images.NavLogo}
                    alt="logo"
                    width="87"
                    height="35"
                  />
                </a>
              </Link>

              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </figure>

            <div className="border-b border-gray-300 my-4">
              <p className="w-4/5 md:w-11/12 py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </section>

          <section className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-primary">
                Let&#39;s Connect
              </p>

              <article className="flex items-center justify-between my-4 w-full sm:w-4/5">
                <a
                  href="https://www.linkedin.com/in/ikramdev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://www.github.com/ikramdeveloper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href="/#resume">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </article>
            </div>
          </section>
        </article>
      </div>
      {/* End Mobile Nav */}
    </nav>
  );
};
export default Navbar;
