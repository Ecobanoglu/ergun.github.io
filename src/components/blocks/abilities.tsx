import React from "react";

import { Box, Card, Tag } from "@/components/ui";

import { IAbility } from "@/lib/types";

export default function Abilities() {
  const abilities = [
    {
      title: "Front-End Development",
      items: [
        "React",
        "Next.js",
        "Typescript",
        "Javascript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JSON",
      ],
    },

    {
      title: "UI/UX Design",
      items: [
        "Figma",
        "Photoshop",
        "Responsive Design",
        "Kullanıcı Deneyimi",
        "UI/UX",
        "İmza Şablonu",
        "Mail Şablonları",
        "UI Animasyon",
      ],
    },
    {
      title: "Back-End Development",
      items: [
        "REST APIs",
        "Mysql",
        "SQL (Orta)",
        "PostgreSQL (Temel)",
        "PHP (Temel)",
      ],
    },
    {
      title: "Araçlar & Teknolojiler",
      items: [
        "Visual Studio",
        "VS Code",
        "Netbeans",
        "PgAdmin4",
        "Jira",
        "Asana",
        "Trello",
      ],
    },
    {
      title: "DevOps",
      items: ["Git", "Jenkins", "Docker"],
    },
    {
      title: "Diğer",
      items: ["SEO", "OOP", "Web standards", "Gulp", "Prettier"],
    },
  ];

  return (
    <Card title="Yetenekler ve Teknoloji Yığını">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
        {abilities.map(({ title, items }: IAbility, i: number) => (
          <Box key={i}>
            <h4 className="font-bold dark:text-gray-300 mb-3">{title}</h4>
            <ul className="flex flex-wrap gap-2">
              {items.map((item: string, k: number) => (
                <li key={k}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </div>
    </Card>
  );
}
