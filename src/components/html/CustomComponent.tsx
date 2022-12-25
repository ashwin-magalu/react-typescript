import React, { ComponentProps } from "react";
import { Greet } from "../Greet";

// Here we are extracting prop types of Greet component to this component
export const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
