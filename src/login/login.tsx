import React, { useState } from 'react';
import { useForm } from "react-hook-form";


export default function Login() {

  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username-input"
            className="form-label">Username</label>
          <input type="text"
            className="form-control"
            id="username-input"
            {...register("username", {required: true, minLength: 6})}
            onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password-input"
            className="form-label">Password</label>
          <input type="password"
            className="form-control"
            id="password-input"
            {...register("password", {required: true, minLength: 6})}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit"
          className="btn btn-primary">Login</button>
      </form>
    </>
  );
}