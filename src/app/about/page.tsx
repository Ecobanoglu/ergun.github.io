import Link from "next/link";
import type { Metadata } from "next";

import { About, Skills } from "@/components/sections";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Hakkımda sayfası hakkında bilgi",
};

export default function Page() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}
