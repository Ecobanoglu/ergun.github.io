import React from "react";

interface IULProps extends React.HTMLProps<HTMLUListElement> {
  children?: React.ReactNode;
  className?: string;
  items: string[];
}

interface LiProps extends React.HTMLProps<HTMLUListElement> {
  text: string;
}

const ListItem = ({ text }: LiProps) => {
  return (
    <li className="mb-3 flex text-base">
      <span className="bg-gray-400 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
      {text}
    </li>
  );
};

export default function List({
  children,
  items,
  className = "",
  ...attributes
}: IULProps) {
  return (
    <ul {...attributes}>
      {items.map((text: string, key: number) => (
        <ListItem text={text} key={key} />
      ))}
    </ul>
  );
}
