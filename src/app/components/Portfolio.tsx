"use client";
import { Button, Segmented } from "antd";

import WorkItem from "./WorkItem";
import { useState } from "react";
import { SegmentedValue } from "antd/es/segmented";

export default function Portfolio() {
  const options = ["전체", "조경", "조명", "도시재생", "도시경관"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClick = (v: SegmentedValue) => {
    setSelectedOption(v.toString());
  };

  return (
    <section
      id="portfolio"
      className="flex items-center justify-center min-h-screen text-center text-black relative bg-white max-md:pb-16 max-md:pt-48 overflow-hidden "
    >
      <div className=" flex flex-col gap-4">
        <p className=" font-extrabold text-[4rem]">Works</p>
        <Segmented
          className=" self-end"
          options={options}
          value={selectedOption}
          onChange={(v) => handleClick(v)}
        />
        <div className="grid grid-cols-4 gap-4">
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
        <Button
          className=" self-center"
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
