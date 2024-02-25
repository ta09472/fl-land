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
        <div className="mt-4 w-[50rem]">
          <Timeline
            className="dark:text-white"
            mode="left"
            items={[
              {
                label: "2011-09-01",
                children: "페스티벌 랜드 설립",
              },
              {
                label: "2012-09-01",
                children:
                  "대규모 프로젝트로 공원 조경 및 야간 조명 설치를 성공적으로 완료",
              },
              {
                label: "2013-09-01",
                children:
                  "전통시장을 문화 예술공간과 융합하여 지역 사회 발전에 기여",
              },
              {
                label: "2015-09-01",
                children: "사업 확장",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
