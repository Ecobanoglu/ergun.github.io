import React from "react";
import cn from "clsx";

interface TimelineProps {
  title: string;
  company?: string;
  time?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  tags: string[];
}

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  data: TimelineProps;
  direction?: "left" | "right";
}

const Timeline = ({ data, direction, className }: Props) => {
  const { title, description, company, time, tags } = data;

  console.log(direction);
  return (
    <>
      <div className="flex flex-row group">
        <div
          className={`lg:w-1/2 w-full relative py-6 lg:py-12 lg:before:absolute lg:before:inset-y-0 lg:before:h-full lg:before:w-[2px] lg:before:bg-gray-400 after:absolute after:top-8 lg:after:top-[5.75rem] after:bg-primary-500 after:border-4 after:w-4 after:h-4 after:rounded-full after:border-slate-50 ${
            direction == "left"
              ? "mr-auto lg:text-right lg:pr-16 lg:before:right-0  lg:before:-mr-[1px] lg:after:-right-2"
              : "ml-auto lg:pl-16 lg:before:left-0 lg:before:-ml-[1px]  lg:after:-left-2"
          }`}
        >
          <div className="font-caveat font-medium text-lg text-primary-500 mb-3 sm:mb-0">
            {company}
          </div>
          <time
            className={`sm:absolute translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-24 h-8 mb-3 mt-1 md:mb-0 text-primary-500 bg-primary-300/50 rounded-full
            ${
              direction == "left"
                ? "md:left-[calc(100%+4rem)]"
                : "md:right-[calc(100%+4rem)]"
            }
            `}
          >
            {time}
          </time>
          <h3 className="text-xl lg:text-3xl font-bold text-gray-950 mb-4">
            {title}
          </h3>
          <div>{description}</div>
          <ul className="mb-0 mt-4 list-none inline-flex items-center -mx-2 italic text-base text-gray-600">
            {tags?.length > 0 &&
              tags.map((tag: string) => <li className="px-2">{tag}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Timeline;
