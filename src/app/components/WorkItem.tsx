"use client";

import { Card } from "antd";
import Image from "next/image";

export default function WorkItem() {
  return (
    <Card
      hoverable
      className=" w-72 h-72"
      cover={<Image alt="example" width={240} height={170} src={""} />}
    >
      <Card.Meta title="도시" description="www.instagram.com" />
    </Card>
  );
}
