import { Social } from "..";

export default function Footer() {
  return (
    <footer className="p-4 text-center bg-white">
      <div className="p-4 w-full flex flex-col justify-center items-center text-center">
        <Social />
        <div className="pt-3 text-sm">Copyleft © 2023 Ergün C.</div>
      </div>
    </footer>
  );
}
