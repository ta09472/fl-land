import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className=" flex justify-between">
      <div className="px-2">
        <Link href="#home" scroll={false}>
          Home
        </Link>
      </div>
      <div className="px-2">
        <Link href="#portfolio" scroll={false}>
          Portfolio
        </Link>
      </div>
      <div className="px-2">
        <Link href="#history" scroll={false}>
          History
        </Link>
      </div>
      <div className="px-2">
        <Link href="#contact" scroll={false}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
