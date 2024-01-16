"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Button } from "antd";

const words = ["조명", "조경", "도시재생", "도시 경관"];

const keywordMap: {
  [key: number]: {
    color: string;
    text: string;
  };
} = {
  0: {
    color: "yellow",
    text: "조명",
  },
  1: {
    color: "green",
    text: "조경",
  },
  2: {
    color: "gray",
    text: "도시재생",
  },
  3: {
    color: "black",
    text: "도시경관",
  },
};

export default function Home() {
  const [wordId, setWordId] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordId((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <section
          id="home"
          className="site-section flex items-center justify-center min-h-screen text-center text-black bg-yellow-200 relative py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          {`우리는 ${words.at(wordId)}의 전문가 `}
          <br />
          Festival Land 입니다.
        </section>

        <section
          id="portfolio"
          className="site-section flex items-center justify-center min-h-screen text-center text-black relative bg-slate-200 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          포트폴리오 영역입니다.
        </section>

        <section
          id="history"
          className="site-section flex items-center justify-center min-h-screen text-center text-black relative bg-red-200 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          히스토리 영역입니다.
        </section>
        <section
          id="contact"
          className="site-section flex items-center justify-center min-h-screen text-center text-black relative bg-blue-200 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          연락 영역입니다.
        </section>
      </div>
      <footer className="px-64 py-8 bg-slate-200">footer 입니다.</footer>
    </div>
  );
}
