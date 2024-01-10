import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <header className="border border-b-black px-12 py-8 flex justify-between top-0 sticky bg-white">
      <h2>Festival Land</h2>
      <NavigationBar />
      <div>대충 다크모드</div>
    </header>
  );
}
