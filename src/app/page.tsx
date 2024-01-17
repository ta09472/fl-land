import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <Portfolio />
        {/* <section
          id="history"
          className=" flex items-center justify-center min-h-screen text-center text-black relative bg-slate-100 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          히스토리 영역입니다.
        </section> */}
        <section
          id="contact"
          className=" drop-shadow-sm flex items-center justify-center min-h-screen text-center text-black relative bg-slate-50 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
        >
          연락 영역입니다.
        </section>
      </div>
      <footer className=" flex flex-col px-64 py-4 bg-slate-50   text-slate-700">
        <span>E-mail : festival-land@gmail.com</span>

        <span>Copyright 2024. Festival Land. All Rights Reserved.</span>
      </footer>
    </>
  );
}
