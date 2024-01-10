import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className=" flex justify-between">
      <div className="px-2">
        <Link href="#home">Home</Link>
      </div>
      <div className="px-2">
        <Link href="#portfolio">Portfolio</Link>
      </div>
      <div className="px-2">
        <Link href="#history">History</Link>
      </div>
      <div className="px-2">
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
