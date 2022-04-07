import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  //   console.log(user);

  const handleLogin = () => {
    setUser({
      name: "a",
      email: "a@gmail.com",
    });
  };
 

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    
      <br />
      <br />
      <h1>User name is : {user?.name} </h1>
      <h1>User name is : {user?.email} </h1>
    </>
  );
};

export default User2;
