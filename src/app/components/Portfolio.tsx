"use client";
import { Button, Segmented } from "antd";

import WorkItem from "./WorkItem";
import { useState } from "react";
import { SegmentedValue } from "antd/es/segmented";
import { Post } from "@/types/post";

interface Props {
  data: Post[];
}

export default function Portfolio({ data }: Props) {
  const options = ["전체", "조경", "조명", "도시재생", "도시경관"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [currentPage, setCurrentPage] = useState(8);

  const handleClick = (v: SegmentedValue) => {
    setSelectedOption(v.toString());
  };

  const renderMore = () => {
    setCurrentPage((prev) => prev + 8);
  };

  function filterBySelectedOption(array: Post[], selectedOption: string) {
    if (selectedOption === "전체") {
      return array;
    }

    return array.filter((item) =>
      item.properties.유형.multi_select.some(
        (type) => type.name === (selectedOption as unknown)
      )
    );
  }

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
          {filterBySelectedOption(
            data.slice(0, currentPage),
            selectedOption
          ).map(({ properties, id }) => (
            <WorkItem properties={properties} key={id} spaceId={id} />
          ))}
        </div>
        <div className="pb-3">
          <Button
            className=" self-center dark:text-white dark:bg-darkCrimsonRed dark:border dark:border-none"
            style={{
              fontWeight: 500,
            }}
            onClick={renderMore}
          >
            More
          </Button>
        </div>
      </div>
    </section>
  );
}
