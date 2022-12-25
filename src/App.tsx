import React from "react";
import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { ClassCounter } from "./components/class/ClassCounter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Timer } from "./components/effect/Timer";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomComponent } from "./components/html/CustomComponent";
import { HTMLButton } from "./components/html/HTMLButton";
import { HTMLInput } from "./components/html/HTMLInput";
import { Input } from "./components/Input";
import { Toast } from "./components/literals/Toast";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Text } from "./components/polymorphic/Text";
import { DomRef } from "./components/Refs/DomRef";
import { MutableRef } from "./components/Refs/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Tony",
    last: "Stark",
  };

  const namesList = [
    { first: "Steve", last: "Rogers" },
    { first: "Black", last: "Widow" },
    { first: "Thor", last: "Odinson" },
  ];

  return (
    <div className="App">
      {/* Basic Props */}
      {/* <Greet name="Ashwin" messageCount={10} isLogin={true} />
      <Person name={personName} />
      <PersonList names={namesList} /> */}

      {/* Advanced Props */}
      {/* <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Robert Downey Jr.</Heading>
      </Oscar> */}

      {/* Event Props */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      /> */}

      {/* Style Props */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* Prop Types and Tips */}
      {/* <Person name={personName} />
      <PersonList names={namesList} /> */}

      {/* useState Hook */}
      {/* <LoggedIn /> */}

      {/* useReducer Hook */}
      {/* <Counter /> */}

      {/* useContext Hook */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* useEffectHook */}
      {/* <Timer /> */}

      {/* useRef Hook */}
      {/* <DomRef />
      <MutableRef /> */}

      {/* Class Component */}
      {/* <ClassCounter message="" /> */}

      {/* Sending Component as a prop */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* Generic Prop */}
      {/* <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* Restricting props: Here only one optional value can be true, it will not allow user to set two optional values as true */}
      {/* <RandomNumber value={10} isPositive /> */}

      {/* Template literals and exclude: Here we will get pre populated values for prop attributes */}
      {/* <Toast position="left-top" /> */}

      {/* Wrapping HTML elements */}
      {/* <HTMLButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </HTMLButton>
      <HTMLInput /> */}

      {/* Extracting a Component prop types */}
      {/* <CustomComponent name="Ashwin" /> */}

      {/* Polymorphic Components */}
      {/* <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text> */}
      
    </div>
  );
}

export default App;
