import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className=" flex justify-between">
      <div className="px-2 py-1 hover:bg-gray-500 transition duration-300 rounded-md">
        <Link href="#home">Home</Link>
      </div>
      <div className="px-2 py-1 hover:bg-gray-500 transition duration-300 rounded-md">
        <Link href="#portfolio">Portfolio</Link>
      </div>
      <div className="px-2 py-1 hover:bg-gray-500 transition duration-300 rounded-md">
        <Link href="#history">History</Link>
      </div>
      <div className="px-2 py-1 hover:bg-gray-500 transition duration-300 rounded-md">
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
