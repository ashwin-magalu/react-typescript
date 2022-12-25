import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLogin
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};
