import dynamic from "next/dynamic";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import History from "./components/History";
import { Suspense, use } from "react";
import { Spin } from "antd";
import { Post } from "@/types/post";

const Contact = dynamic(
  () => import("./components/Contact"),
  { ssr: false } // 서버 사이드 렌더링 비활성화
);

export default function Home() {
  async function getData(): Promise<{ results: Post[] }> {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion`,

        {
          next: {
            revalidate: 30,
          },
        }
      );
      return await res.json();
    } catch (error) {
      // 이거 에러 핸들링 어케함???
      console.log(error);
      return { results: [] };
    }
  }
  const data = use(getData());

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <Portfolio data={data.results} />
        <History />
        <Suspense fallback={<Spin />}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
