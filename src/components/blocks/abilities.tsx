import React from "react";

import { Section, Item } from "@/components/ui";

import { IValue } from "@/lib/types";

export default function Abilities() {
  const abilities = [
    {
      title: "Frontend Frameworks",
      value: "React, Next.js",
    },
    {
      title: "Content Management Systems",
      value: "Strapi, Wordpress",
    },
    {
      title: "Frontend Skills",
      value:
        "HTML5, CSS3, SASS, Javascript, Typescript, Tailwind CSS, Bootstrap",
    },
    {
      title: "Programs",
      value:
        "Visual Studio, VS Code, PgAdmin4, Netbeans, Figma, Jira, Asana, Trello",
    },
    {
      title: "Databases",
      value: "Mysql, PostgreSQL",
    },
    {
      title: "Other",
      value: "Git, Jenkins, RESTful API, Gulp, Prettier, PHP (Basic)",
    },
  ];

  return (
    <Section title="Abilities and Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-12">
        {abilities.map(({ title, value }: IValue, i: number) => (
          <Item key={i}>
            <h4 className="font-medium text-black">{title}</h4>
            <p>{value}</p>
          </Item>
        ))}
      </div>
    </Section>
  );
}
