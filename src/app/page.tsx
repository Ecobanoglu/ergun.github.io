import type { Metadata } from "next";

import { About, Projects, Abilities, Experience } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "Anasayfa hakkında bilgi",
};

export default function Home() {
  return (
    <>
      <About />
      <Abilities />
      <Experience />
      <Projects />
    </>
  );
}
