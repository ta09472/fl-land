"use client";

import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const catchScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", catchScroll);
    return () => window.addEventListener("scroll", catchScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 섹션 ID 목록
      const sections = ["home", "portfolio", "history", "contact"];

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          window.scrollY >= section.offsetTop - 64 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 64
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = scroll
    ? "flex flex-row sticky top-0 h-16 px-12 z-50 items-center justify-between bg-white  border border-none transition duration-200"
    : "flex flex-row sticky top-0 h-16 px-12 z-50 items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white transition-[background,shadow] group/header [&.lqd-is-sticky]:shadow-[0_4px_20px_rgba(0,0,0,0.03)] [&.lqd-is-sticky]:text-black border border-none transition duration-200";

  return (
    <header className={style}>
      <h2>Festival Land</h2>
      <NavigationBar isScrolled={scroll} location={activeSection} />
      <div>대충 다크모드</div>
    </header>
  );
}
