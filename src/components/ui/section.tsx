import React from "react";
import cn from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BaseStyle: string = "mb-8 lg:mb-12";

export default function Section({
  children,
  title,
  className = "",
  ...attributes
}: Props) {
  return (
    <section
      className={cn(`${BaseStyle} ${className && className}`)}
      {...attributes}
    >
      <div>
        {title && (
          <h3 className="font-bold mb-3 lg:mb-5 text-xl lg:text-2xl uppercase text-black dark:text-gray-300">
            {title}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
}
