import React from "react";
import Link from "next/link";

import { Section, Item } from "@/components/ui";

import { IValue } from "@/lib/types";

const getByValueWithTag = (value: string) => {
  if (value.includes("@")) {
    return (
      <Link href={`mailto:${value}`} className="underline" target="_blank">
        {value}
      </Link>
    );
  } else if (value.includes(".com")) {
    return (
      <Link href={`${value}`} className="underline" target="_blank">
        {value}
      </Link>
    );
  } else return value;
};

export default function Information() {
  const informations = [
    {
      title: "Location",
      value: "İzmir, Turkey",
    },
    {
      title: "Freelancer",
      value: "Avaliable",
    },
    {
      title: "Languages",
      value: "Turkish, English(Intermediate)",
    },
    {
      title: "Mail Address",
      value: "ecobanoglu@protonmail.com",
    },
    {
      title: "Github",
      value: "https://github.com/Ecobanoglu",
    },
    {
      title: "Linkedin",
      value: "https://www.linkedin.com/in/ergunc/",
    },
  ];

  return (
    <Section title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-12">
        {informations.map(({ title, value }: IValue, i: number) => (
          <Item key={i}>
            <h3 className="font-medium">{title}</h3>
            <p> {getByValueWithTag(value)}</p>
          </Item>
        ))}
      </div>
    </Section>
  );
}
