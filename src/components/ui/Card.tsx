import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return <article className={`card ${className}`.trim()}>{children}</article>;
};
