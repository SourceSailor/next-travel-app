"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { GiH2O } from "react-icons/gi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Desktop Menu
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <li>{link.label}</li>
          </Link>
        ))}

        {/* Desktop Links */}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Open/Close Functionality */}
      <div className="absolute z-20 block top-6 right-3">
        {!menuOpen ? (
          <HiOutlineMenu
            className="w-7 h-10 mr-2 cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-7 h-10 mr-2 cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 h-screen w-1/3 bg-gray-700/50 backdrop-filter z-10 p-8 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Links */}
        <ul className="h-full gap-12 lg:flex mt-10 ">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-gray-40  cursor-pointer pb-1.5 transition-all hover:font-bold text-gray-100"
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
