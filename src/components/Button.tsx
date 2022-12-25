import React, { MouseEvent } from "react";

type ButtonProps = {
  //   handleClick: () => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};
