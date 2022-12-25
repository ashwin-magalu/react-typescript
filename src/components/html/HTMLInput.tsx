import React, { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export const HTMLInput = (props: InputProps) => {
  return <input {...props} />;
};
