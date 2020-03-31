import React, { useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";
import loading from "./assets/loading.gif";
export default function Login() {
  const { user, handleForm } = useContext(LoginContext);

  return (
    <>
      {user.isLogged ? (
        <Redirect to="/" />
      ) : user.name && user.pass ? (
        <form onSubmit={() => handleForm()} className="form">
          <input type="text" defaultValue={user.name} className="input-box" />
          <input type="text" defaultValue={user.pass} className="input-box" />
          <input type="submit" value="Log In" className="btn" />
        </form>
      ) : (
        <img src={loading} style={{ width: "320px" }} alt="loading..." />
      )}
    </>
  );
}
