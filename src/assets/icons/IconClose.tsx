import cn from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export default function IconClose({ className = "", ...attributes }: Props) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={cn(`fill-current ${className && className}`)}
      {...attributes}
    >
      <path
        fillRule="evenodd"
        d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
      />
    </svg>
  );
}
