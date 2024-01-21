"use client";
import { Button, Segmented } from "antd";

import WorkItem from "./WorkItem";
import { use, useState } from "react";
import { SegmentedValue } from "antd/es/segmented";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/notion`);
  return await res.json();
};

export default function Portfolio() {
  const data = use(getData());
  console.log(data.results);
  const options = ["전체", "조경", "조명", "도시재생", "도시경관"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClick = (v: SegmentedValue) => {
    setSelectedOption(v.toString());
  };

  return (
    <section
      id="portfolio"
      className="flex items-center justify-center min-h-screen text-center text-black relative bg-white max-md:pb-16 max-md:pt-48 overflow-hidden dark:text-white dark:bg-darkOnyx transition-color duration-300 "
    >
      <div className=" flex flex-col gap-4">
        <p className=" font-extrabold text-[4rem] dark:text-darkCrimsonRed transition-colors duration-300">
          Works
        </p>
        <Segmented
          className=" self-end dark:bg-darkSlateGray dark:border dark:border-darkCharcoal dark:text-white"
          options={options}
          value={selectedOption}
          onChange={(v) => handleClick(v)}
        />
        <div className="grid grid-col-1 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <WorkItem workId={v} key={v} />
          ))}
        </div>
        <Button
          className=" self-center dark:text-white dark:bg-darkCrimsonRed dark:border dark:border-none"
          style={{
            fontWeight: 500,
          }}
        >
          More
        </Button>
      </div>
    </section>
  );
}
