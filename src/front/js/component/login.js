import React, { Component, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { Context } from "../store/appContext";
// import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const clickHandler = () => {
    actions.login(email, password);
  };

  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined) {
      history("/private");
    }
  }, [store.token, history]);

  return (
    <div className="auth-wrapper">
      {store.token && store.token != "" && store.token != undefined ? (
        "This is the token logged in" + store.token
      ) : (
        <div className="auth-inner">
          <form>
            <h3>Sign In Page</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={clickHandler}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};