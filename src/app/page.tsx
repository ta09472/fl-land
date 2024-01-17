import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <Hero />

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
