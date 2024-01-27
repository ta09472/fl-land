"use client";

import { Timeline } from "antd";

export default function History() {
  return (
    <section
      id="history"
      className=" flex items-center justify-center min-h-screen text-center text-black relative bg-slate-100 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view dark:bg-darkCharcoal transition-colors duration-300 "
    >
      <div className="">
        <p className="block text-[2rem] font-extrabold dark:text-white">
          에프엘이 걸어온 길
        </p>
        <div className="mt-4">
          <Timeline
            className="dark:text-white"
            mode="left"
            items={[
              {
                label: "2011-09-01",
                children: "페스티벌 랜드",
              },
              {
                label: "2012-09-01",
                children: "무슨 무슨 ",
              },
              { label: "2013-09-01", children: "이런 저런" },
              {
                label: "2015-09-01",
                children: "이러쿵 저러쿵",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
