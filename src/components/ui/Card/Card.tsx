import React from "react";
import cn from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  title: string;
  company?: string;
  time?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  variant?: "about" | "experience" | "service";
  color?: "dark" | "light" | "primary" | "secondary" | "blue" | "green";
}

const AboutCard = ({ title, description, color, className }: Props) => {
  return (
    <div
      className={cn(
        `p-6 flex items-center justify-center text-center uppercase dark:bg-gray-800 rounded-lg w-full bg-gray-100 dark:shadow-slate-900 transition-all translate-y-0 ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl ${
          className && className
        }`
      )}
    >
      <div>
        <h3 className="block font-black text-3xl lg:text-5xl mb-4">{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  title,
  description,
  company,
  time,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        `flex flex-col p-6 lg:p-12 bg-white dark:bg-gray-800 rounded-lg w-full dark:shadow-slate-900 transition-all translate-y-0 ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl ${
          className && className
        }`
      )}
    >
      <h3 className="block font-black text-xl lg:text-3xl mb-4">{title}</h3>
      <div className="block mb-4">
        {company} / {time}
      </div>
      <span className="text-gray-400">{description}</span>
    </div>
  );
};

export default function Card({
  children,
  title,
  description,
  company,
  time,
  className = "",
  color = "primary",
  variant = "experience",
  ...attributes
}: Props) {
  return (() => {
    switch (variant) {
      case "about":
        return (
          <AboutCard title={title} description={description} color={color} />
        );
      case "experience":
        return (
          <ExperienceCard
            title={title}
            description={description}
            company={company}
            time={time}
            className={className}
          />
        );
      case "service":
        return (
          <AboutCard title={title} description={description} color={color} />
        );
      default:
        return null;
    }
  })();
}
