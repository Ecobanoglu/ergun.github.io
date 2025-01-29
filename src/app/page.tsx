import type { Metadata } from "next";

import { About, Projects, Abilities, Experience } from "@/components/blocks";

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
