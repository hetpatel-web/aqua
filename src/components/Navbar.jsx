import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Job Openings", href: "/job-openings" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseNav = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full h-20 shadow bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
            <Image
              src="/images/logo.JPG"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex">
              {pages.map(({ title, href }) => (
                <Link key={href} href={href}>
                  <li
                    className={`ml-10 uppercase hover:border-b-4 text-xl cursor-pointer ${
                      href === currentPath ? "border-b-4 font-bold" : ""
                    }`}
                    onClick={handleCloseNav}
                  >
                    {title}
                  </li>
                </Link>
              ))}
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
                {pages.map(({ title, href }) => (
                  <Link key={href} href={href}>
                    <li
                      className="py-4 cursor-pointer"
                      onClick={handleCloseNav}
                    >
                      {title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
