import { Menu, Logo } from "..";
import { Switch } from "@/app/components/ui";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full py-2 md:py-4 z-50">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="w-full flex flex-row items-center justify-end text-center relative">
          <Logo />
          <Menu />
          <Switch />
        </div>
      </div>
    </header>
  );
}
