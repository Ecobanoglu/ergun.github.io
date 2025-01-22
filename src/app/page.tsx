import type { Metadata } from "next";

import { About, Information, Abilities, Experience } from "@/components/blocks";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    </>
  );
}
