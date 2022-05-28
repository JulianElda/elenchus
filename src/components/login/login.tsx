import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "api/axios";

import { Authentication } from "types";
import { LoginErrorResponses } from "const/login";

import "components/login/login.scss";

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = () => {
    let payload: Authentication = {
      username: username,
      password: password,
      clientSecret: "gandooahmedabad",
      version: "uiapi(gandoo)-0.0.0",
    };

    axios
      .post("/uiapi/AccountsAPI/v1/rest/login/", payload)
      .then((res) => {
        localStorage.setItem("csfrToken", res.data.csfrToken);
        navigate("/box");
      })
      .catch((res) => {
        setShowError(true);
        switch (res.response.data.payload) {
          case LoginErrorResponses.WRONG_CRED:
            setErrorMessage(t("login.error.wrong-cred"));
            break;
          default:
            setErrorMessage(t("login.error.default"));
            break;
        }
      });
  };

  return (
    <div className="container login-container">
      <div className="card m-auto">
        <div className="card-body">
          <h2 data-testid="login-header">{t("login.header")}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username-input" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username-input"
                {...register("username", {
                  required: true,
                  minLength: 6,
                  maxLength: 128,
                })}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password-input" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 128,
                })}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-danger">{showError ? errorMessage : ""}</p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
