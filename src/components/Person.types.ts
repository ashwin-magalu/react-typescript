export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};

// or

// export type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };
