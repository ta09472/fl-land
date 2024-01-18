import { useRouter } from "next/navigation";

interface Props {
  postId: string | string[];
}

const Modal = ({ postId }: Props) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <button
        onClick={() => router.back()}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        닫기
      </button>
    </div>
  );
};

export default Modal;
