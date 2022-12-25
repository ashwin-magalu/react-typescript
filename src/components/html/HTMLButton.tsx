import React, { ComponentProps } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;
// By using omit we are making children to be string alone and not a ReactNode
// ComponentProps helps us add specifed HTML tags attributes in props by default

export const HTMLButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
