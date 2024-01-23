"use client";

import { Properties } from "@/types/post";
import { Card, Modal, Tag } from "antd";
import Image from "next/image";

import { useState } from "react";

interface Props {
  properties: Properties;
}

export default function WorkItem({ properties }: Props) {
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
        className="w-72 h-72 dark:bg-darkSlateGray dark:border dark:border-darkCharcoal overflow-hidden flex flex-col "
        cover={
          <Image
            alt="example"
            width={240}
            height={200}
            layout="fixed"
            className=" lg:w-[14rem] lg:h-[12.4rem] w-[10rem] h-[12rem] flex-1"
            src={properties.사진.files.at(0)?.file?.url ?? ""}
          />
        }
        onClick={showModal}
      >
        <div className="dark:text-white">
          {properties.제목.rich_text.map((v) => (
            <Card.Meta
              className="dark:text-white"
              key={v.plain_text}
              style={{
                color: "white",
              }}
              title={v.plain_text}
              description={
                <div className=" flex gap-1">
                  {properties.유형.multi_select.map(({ id, name, color }) => (
                    <Tag
                      color={color}
                      key={id}
                      bordered={false}
                      className="dark:saturate-50 dark:brightness-95"
                    >
                      {name}
                    </Tag>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </Card>

      <Modal
        centered
        title={properties.제목.rich_text.at(0)?.plain_text}
        width={"75rem"}
        open={isModalOpen}
        footer={
          <div className="flex flex- justify-between dark:text-white">
            <div>
              {properties.유형.multi_select.map(({ id, name, color }) => (
                <Tag
                  color={color}
                  key={id}
                  bordered={false}
                  className="dark:saturate-50 dark:brightness-95"
                >
                  {name}
                </Tag>
              ))}
            </div>
            <div className="dark:text-white">
              장소: {properties.장소.title.at(0)?.plain_text}
            </div>
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
        <div className="flex flex-col justify-center items-center ">
          {properties.사진.files.map((v) => (
            <Image
              alt="example"
              width={240}
              height={170}
              className="flex-1"
              src={v.file?.url}
              key={v.file?.url}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}
