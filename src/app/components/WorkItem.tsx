"use client";

import { Card, Modal } from "antd";
import Image from "next/image";

import { useState } from "react";

export default function WorkItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
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
        <div></div>
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
