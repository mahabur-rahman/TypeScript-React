import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  //   console.log(user);

  const handleLogin = () => {
    setUser({
      name: "a",
      email: "a@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <br />
      <h1>User name is : {user?.name} </h1>
      <h1>User name is : {user?.email} </h1>
    </>
  );
};

export default User;
