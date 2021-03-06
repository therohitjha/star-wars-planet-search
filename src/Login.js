import React, { useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";
export default function Login() {
  const { user, handleForm, setUser } = useContext(LoginContext);
  return (
    <>
      {user.isLogged ? (
        <Redirect to="/" />
      ) : (
        <form onSubmit={(e) => handleForm(e)} className="form">
          {user.err && <h4 style={{ color: "red" }}>{user.err}</h4>}
          <input
            type="text"
            defaultValue={user.name}
            className="input-box"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          
          />
          <input
            type="text"
            defaultValue={user.pass}
            className="input-box"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
           
          />
          <input type="submit" value="Log In" className="btn" />
        </form>
      )}
    </>
  );
}
