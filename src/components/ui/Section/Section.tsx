import React from "react";
import cn from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BaseStyle: string =
  "flex justify-center items-center min-h-screen pt-28 pb-8 lg:pt-16 lg:pb-12 text-xl lg:text-xl";

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
      <div className="container px-4 lg:px-8 mx-auto">
        {title && (
          <h2 className="font-black text-2xl lg:text-5xl/small block mb-4 lg:mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
