import React, { useState, useEffect } from "react";

type LoginProps = {
    name : String,
    email : String,
    address : String
  
}


const Login: React.FC = () => {
  const [login, setLogin] = useState<Boolean>(true);
  const [user, setUser] = useState<LoginProps | null>(null)

  const handleLogin = () => {
    console.log("Login");
    setLogin(true);
  };

  const handleLogout = () => {
    console.log("logout");
    setLogin(false);
  };


  useEffect(() => {
    setUser({
      name : "mahabur rahman",
      email : 'mahabur@gmail.com',
      address: 'dhaka'
    })
  }, [])


  return (
    <>
      <h1 className="text-4xl text-purple-700">{login ? "Login" : "logout"}</h1>

      <div className="mt-6">
        <button onClick={handleLogin}>Login</button>
        <br />
        <button onClick={handleLogout}> Logout</button>
        <hr />
        { login && user?.name }
        <br />
        { login && user?.email }
        <br />
        { login && user?.address }
      </div>
    </>
  );
};

export default Login;
