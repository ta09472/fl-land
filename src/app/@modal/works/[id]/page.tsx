"use client";

import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";

const PostPage = () => {
  const router = useRouter();

  return <Modal postId={"1"} />;
};

export default PostPage;
