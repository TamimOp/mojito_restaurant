import React from "react";
import { navLinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
