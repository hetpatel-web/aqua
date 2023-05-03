import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "../public/images/logo.jpg";
// navbar component with links
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="fixed w-full h-20 shadow bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex">
              <Link href="/">
                <li className="ml-10 uppercase hover:border-b-4 text-xl">
                  Home
                </li>
              </Link>

              <Link href="/about">
                <li className="ml-10 uppercase hover:border-b-4 text-xl">
                  About
                </li>
              </Link>

              <Link href="/services">
                <li className="ml-10 uppercase hover:border-b-4 text-xl">
                  Services
                </li>
              </Link>

              <Link href="/contact">
                <li className="mx-10 uppercase hover:border-b-4 text-xl">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white"
                : "fixed left-[-100%] top-0 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <AiOutlineClose onClick={handleNav} size={25} />
            </div>
            <div className="flex-col py-4">
              <ul>
                <Link href="/">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    About
                  </li>
                </Link>
                <Link href="/services">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    Services
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
