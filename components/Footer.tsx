import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../constants";
import Image from "next/image";

const Footer = () => {
  const firstFooterLink = FOOTER_LINKS[0];
  const secondFooterLink = FOOTER_LINKS[1];
  return (
    <footer className="flexCenter flex-col mb-24">
      <div className="padding-container max-container flex w-full flex-row gap-14">
        {/* Logo */}
        <div>
          <Image src="/hilink-logo.svg" alt="logo" height={100} width={100} />
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-gray-60 bold-18">{firstFooterLink.title}</h4>
          <ul>
            {firstFooterLink.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Our Community */}
        <div>
          <h4 className="text-gray-60 bold-18">{secondFooterLink.title}</h4>
          <ul>
            {secondFooterLink.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-gray-60 bold-18">{FOOTER_CONTACT_INFO.title}</h4>
          <ul>
            {FOOTER_CONTACT_INFO.links.map((link, i) => (
              <li key={i}>
                {link.label}: {link.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-gray-60 bold-18">{SOCIALS.title}</h4>
          <ul className="flex flex-row gap-3">
            {SOCIALS.links.map((link, i) => (
              <li key={i}>
                <Image src={link} alt="socials" height={25} width={25} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-4 border-indigo-500 ">
        <p>2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
