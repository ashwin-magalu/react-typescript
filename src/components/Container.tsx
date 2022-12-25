import React, { CSSProperties } from "react";

type ContainerProps = {
  styles: CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text Content</div>;
};
