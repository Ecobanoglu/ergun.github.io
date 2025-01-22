import React from "react";

import { Item } from "@/components/ui";

import { IExperienceItem } from "@/lib/types";

interface ExperienceItemProps {
  data: IExperienceItem;
}

export default function ExperienceItem({ data }: ExperienceItemProps) {
  const { title, company, time, location, type, description, tags } = data;
  return (
    <Item>
      <ul className="flex items-center justify-start mb-1 text-sm">
        <li className="before:content-['•'] before:inline-block before:px-3 before:first:hidden">
          <span>{time}</span>
        </li>
        <li className="before:content-['•'] before:inline-block before:px-3 before:first:hidden">
          <span>{type}</span>
        </li>
      </ul>
      <h3 className="font-bold mb-2">
        {title} - <span className="text-black">{company}</span>
      </h3>

      <ul className="list-outside list-disc ml-6 mb-3">
        {description.map((item: string, i: number) => (
          <li key={i} className="">
            {item}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-start mb-1 space-x-2 text-xs">
        {tags.map((tag: string, i: number) => (
          <li key={i}>
            <span className="inline-block py-1 px-2 bg-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-400">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </Item>
  );
}
