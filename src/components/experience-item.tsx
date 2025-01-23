import React from "react";

import { Box } from "@/components/ui";

import { IExperienceItem } from "@/lib/types";

interface ExperienceItemProps {
  data: IExperienceItem;
}

export default function ExperienceItem({ data }: ExperienceItemProps) {
  const { title, company, time, location, type, description, tags } = data;
  return (
    <Box>
      <h4 className="font-bold dark:text-gray-300 mb-2">{title}</h4>
      <div className="flex items-center space-x-4 mb-2">
        <h5 className="font-semibold dark:text-gray-300">{company}</h5>
        <span>-</span>
        <p className="text-sm">{time}</p>
      </div>
      <ul className="list-outside list-disc ml-6">
        {description.map((item: string, i: number) => (
          <li key={i} className="">
            {item}
          </li>
        ))}
      </ul>
      {/**  
      <ul className="flex items-center justify-start mb-1 space-x-2 text-xs">
        {tags.map((tag: string, i: number) => (
          <li key={i}>
            <span className="inline-block py-1 px-2 bg-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-400">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      */}
    </Box>
  );
}
