import React, { useState } from "react";

type User = {
  name: string;
  email: string;
};

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State value which will be determined in the future
  const [user, setUser] = useState<User | null>(null);

  // Type assertion
  // const [user, setUser] = useState<User>({} as User);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Ashwin", email: "ashwin.magalu@gmail.com" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
