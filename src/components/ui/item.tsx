import React from "react";

interface ItemProp {
  children: React.ReactNode;
}

export default function Item({ children }: ItemProp) {
  return <div className="bg-gray-100 p-3 lg:p-4 rounded-lg">{children}</div>;
}
