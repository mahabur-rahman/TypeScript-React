import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button> <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <br />
      <h1>User is {isLoggedIn ? `loggedIn` : `logout`}</h1>
    </>
  );
};

export default LoggedIn;
