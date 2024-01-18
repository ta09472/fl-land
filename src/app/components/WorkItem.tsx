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
        className=" w-72 h-72"
        cover={<Image alt="example" width={240} height={170} src={""} />}
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
        footer={null}
        onCancel={handleCancel}
      >
        {workId}
      </Modal>
    </>
  );
}
