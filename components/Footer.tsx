import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const firstFooterLink = FOOTER_LINKS[0];
  const secondFooterLink = FOOTER_LINKS[1];
  return (
    <footer className="flexCenter flex-col mb-24">
      <div className="padding-container max-container flex w-full flex-row gap-14 flex-wrap md:flex-1 mb-10">
        {/* Logo */}
        <div className="flex flex-col items-start justify-center flex-1">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" height={100} width={100} />
          </Link>
        </div>

        {/* Learn More */}
        <div className="md:flex-1">
          <h4 className="text-gray-60 bold-18">{firstFooterLink.title}</h4>
          <ul>
            {firstFooterLink.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Our Community */}
        <div className="md:flex-1">
          <h4 className="text-gray-60 bold-18">{secondFooterLink.title}</h4>
          <ul className="regular-14 flex flex-col gap-1 text-gray-40">
            {secondFooterLink.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:flex-1">
          <h4 className="text-gray-60 bold-18">{FOOTER_CONTACT_INFO.title}</h4>
          <ul className="regular-14 flex flex-col gap-1 text-gray-40">
            {FOOTER_CONTACT_INFO.links.map((link, i) => (
              <li key={i}>
                {link.label}: {link.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="md:flex-1">
          <h4 className="text-gray-60 bold-18">{SOCIALS.title}</h4>
          <ul className="flex md:flex-col lg:flex-row gap-3">
            {SOCIALS.links.map((link, i) => (
              <li key={i}>
                <Image src={link} alt="socials" height={25} width={25} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-20 w-[80%] text-center mx-10">
        <p className="pt-8">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
