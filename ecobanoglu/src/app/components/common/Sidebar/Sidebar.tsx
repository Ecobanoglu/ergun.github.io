import { Menu, Logo, Footer } from "..";

export default function Sidebar() {
  return (
    <aside className="flex flex-row fixed left-0 top-0 w-96 h-full bg-white">
      <div className="p-4 w-full flex flex-col justify-between text-center">
        <Logo />
        <Menu />
        <Footer />
      </div>
    </aside>
  );
}
