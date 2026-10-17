import { type ReactNode } from "react";

export type TagProps = {
  label?: string;
  children?: ReactNode;
  className?: string;
};

export const Tag = ({ label, children, className = "" }: TagProps) => {
  return <span className={`tag ${className}`.trim()}>{label ?? children}</span>;
};
