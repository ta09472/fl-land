"use client";

import { Card, Modal } from "antd";
import Image from "next/image";

import { useState } from "react";

interface Props {
  workId: string | number;
}

export default function WorkItem({ workId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        hoverable
        className="w-72 h-72 dark:bg-darkSlateGray dark:border dark:border-darkCharcoal"
        cover={
          <Image
            alt="example"
            width={240}
            height={170}
            className=" lg:w-[240px] lg:h-[170px] w-[200px] h-[180px] "
            src={""}
          />
        }
        onClick={showModal}
      >
        <div>{workId}</div>
        <Card.Meta title="도시" description="www.instagram.com" />
      </Card>

      <Modal
        centered
        title="Basic Modal"
        width={"75rem"}
        open={isModalOpen}
        footer={
          <div className="flex flex- justify-between dark:text-white">
            <div>#조경 #전주 #야경</div>
            <div> 전주입니다.</div>
          </div>
        }
        onCancel={handleCancel}
        style={{
          overflow: "scroll",
        }}
        classNames={{
          body: "h-[50rem] overflow-scroll",
        }}
      >
        <div className="flex-1 border border-red-600  ">
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
          <Image
            alt="example"
            width={240}
            height={170}
            className="flex-1"
            src={""}
          />
        </div>
      </Modal>
    </>
  );
}
