import type { Metadata } from "next";

import { Hero } from "@/components/sections/";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "Anasayfa hakkında bilgi",
};

export default function Home() {
  return <Hero />;
}
