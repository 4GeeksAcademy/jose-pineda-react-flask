import React, { Component, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { Context } from "../store/appContext";
// import "../../styles/home.css";

export const SignUp = () => {
  const { store } = useContext(Context);

  const history = useNavigate();

  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined) {
      history("/private");
    }
  }, [store.token, history]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up Page</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};