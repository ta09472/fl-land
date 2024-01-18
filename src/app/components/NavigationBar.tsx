"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  isScrolled: boolean;
  location: string;
}

export default function NavigationBar({ isScrolled, location }: Props) {
  const baseBlockStyle = twMerge(
    "text-center flex justify-center  hover:bg-opacity-20 transition duration-200 rounded-md",
    isScrolled ? "hover:bg-gray-400" : "hover:bg-slate-50"
  );

  const baseLinkStyle = twMerge(
    "py-1.5 px-4 rounded-md bg-opacity-20 transition duration-200"
  );

  const scrolledStyle = isScrolled ? "bg-gray-400" : "bg-slate-50";

  return (
    <nav className=" flex justify-between gap-2">
      <div className={baseBlockStyle}>
        <Link
          href="#home"
          className={
            location === "home"
              ? `${baseLinkStyle} ${scrolledStyle}`
              : `${baseLinkStyle} `
          }
        >
          Home
        </Link>
      </div>
      <div className={baseBlockStyle}>
        <Link
          href="#portfolio"
          className={
            location === "portfolio"
              ? `${baseLinkStyle} ${scrolledStyle}`
              : `${baseLinkStyle} `
          }
        >
          Portfolio
        </Link>
      </div>
      <div className={baseBlockStyle}>
        <Link
          href="#history"
          className={
            location === "history"
              ? `${baseLinkStyle} ${scrolledStyle}`
              : `${baseLinkStyle} `
          }
        >
          History
        </Link>
      </div>
      <div className={baseBlockStyle}>
        <Link
          href="#contact"
          className={
            location === "contact"
              ? `${baseLinkStyle} ${scrolledStyle}`
              : `${baseLinkStyle} `
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
