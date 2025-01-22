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
          <h2 className="font-bold mb-3 text-xl text-black dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
