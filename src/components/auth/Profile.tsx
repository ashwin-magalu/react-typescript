import React from "react";

export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private profile Component. Name is {name}</div>;
};
