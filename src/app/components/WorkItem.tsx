"use client";

import { Properties } from "@/types/post";
import { Card, Modal, Tag, Image as AntdImage } from "antd";
import Image from "next/image";

import { useState } from "react";

interface Props {
  properties: Properties;
  spaceId: string;
}

export default function WorkItem({ properties, spaceId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function convertToNotionProxyURL(originalUrl: string, userId = "") {
    function createSafeURL(originalUrl: string) {
      try {
        // 유효한 URL인지 확인하고 URL 객체 생성
        const url = new URL(originalUrl);
        return url;
      } catch (error) {
        console.error("Invalid URL:", error.message);
        // 여기에서 기본값을 반환하거나, null을 반환할 수 있음
        return "";
      }
    }

    // Step 1: AWS S3 URL에서 파일 경로 추출

    const url = createSafeURL(originalUrl);
    console.log(url);
    // const filePath = encodeURIComponent(url.origin + url.pathname);

    // // Step 2: Notion Proxy URL 생성
    // const notionProxyUrl = `https://swamp-output-6ff.notion.site/image/${filePath}?id=${spaceId}&table=block&width=40&cache=v2`;

    return originalUrl;
  }

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
            // src="https://swamp-output-6ff.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F13d6f226-0c34-4164-98b4-8fa827bca8be%2F04626e4a-2546-4712-acce-775a13888e97%2FDALLE_2024-02-23_18.26.36_-_An_illustration_of_a_Korean_kite_festival_with_families_and_children_flying_traditional_rectangular_Korean_kites_against_a_clear_blue_sky._The_scene_.webp?id=ebf89e4c-4a25-4448-bb77-b38aff99ed5a&table=block&spaceId=13d6f226-0c34-4164-98b4-8fa827bca8be&width=40&userId=&cache=v2"
            src={convertToNotionProxyURL(
              properties.사진.files.at(0)?.file?.url ?? ""
            )}
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
        width={"60rem"}
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
        <div className="flex flex-col justify-center items-center gap-4">
          {properties.사진.files.map((v) => (
            <div
              className="p-4 "
              key={v.file.url}
              style={{
                width: "40rem",
                height: "40rem",
                position: "relative",
              }}
            >
              <Image
                objectFit="contain"
                src={convertToNotionProxyURL(v.file?.url)}
                className="rounded-md"
                alt="이미지"
                fill
              />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
