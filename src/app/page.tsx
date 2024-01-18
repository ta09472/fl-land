import dynamic from "next/dynamic";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import History from "./components/History";
import { Suspense } from "react";
import { Spin } from "antd";

const Contact = dynamic(
  () => import("./components/Contact"), // 카카오 맵 컴포넌트의 경로
  { ssr: false } // 서버 사이드 렌더링 비활성화
);

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <Portfolio />
        <History />
        <Suspense fallback={<Spin />}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
