import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <header className="flex flex-row sticky top-0 h-16 px-12 z-50 items-center justify-between border border-b-black text-black transition-[background,shadow] group/header [&.lqd-is-sticky]:bg-white [&.lqd-is-sticky]:shadow-[0_4px_20px_rgba(0,0,0,0.03)] [&.lqd-is-sticky]:text-black">
      <h2>Festival Land</h2>
      <NavigationBar />
      <div>대충 다크모드</div>
    </header>
  );
}
