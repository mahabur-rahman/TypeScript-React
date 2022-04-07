import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const User = useContext(UserContext);

  const login = () => {
    if (User) {
      User.setUser({
        name: "mahabur",
        email: "mahabur@gmail.com",
      });
    }
  };

  const logout = () => {
    if (User) {
      User.setUser(null);
    }
  };

  return (
    <>
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Logout</button>
      <br />
      <h1>User name is : {User?.user?.name}</h1>
      <h1>User name is : {User?.user?.email}</h1>
    </>
  );
};

export default User;
