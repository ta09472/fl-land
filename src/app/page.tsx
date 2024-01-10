"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";

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
      <div className="flex flex-col gap-4 px-80 mb-4">
        <section className=" flex justify-center py-96" id="home">
          {`우리는 ${words.at(wordId)}의 전문가 `}
          <br />
          Festival Land 입니다.
        </section>

        <section
          className=" flex justify-center py-96  border border-slate-400 rounded-xl"
          id="portfolio"
        >
          포트폴리오 영역입니다.
        </section>

        <section
          className=" flex justify-center py-96  border border-slate-400 rounded-xl"
          id="history"
        >
          히스토리 영역입니다.
        </section>
        <section
          className=" flex justify-center py-96  border border-slate-400 rounded-xl"
          id="contact"
        >
          연락 영역입니다.
        </section>
      </div>
      <footer className="px-12 py-8 bg-slate-200">footer 입니다.</footer>
    </div>
  );
}
