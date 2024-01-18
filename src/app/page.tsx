import dynamic from "next/dynamic";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

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
        <section
          id="history"
          className=" flex items-center justify-center min-h-screen text-center text-black relative bg-slate-100 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          히스토리 영역입니다.
        </section>
        <Contact />
      </div>
      <footer className=" flex flex-col px-64 py-4 bg-slate-50   text-slate-700">
        <p className="font-semibold block">페스티벌 랜드</p>
        <p className="block">사업자 등록번호 : 11111 | 대표 : 김현진</p>
        <p className="block">
          주식회사 페스티벌랜드 | 제조판매업 신고번호 : 2014-전주-03377
        </p>
        <p className="block">
          우편번호(01237) | 전라북도 전주시 덕진구 전미중앙로 21
        </p>
      </footer>
    </>
  );
}
