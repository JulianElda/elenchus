import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login_api } from "api/api-faker";
import { LoginPayloadType } from "types";
import { LoginErrorResponses } from "const/login";

import loginLogo from "assets/images/sakura.png";
import "./login.scss";

export function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = () => {
    let payload: LoginPayloadType = {
      username: username,
      password: password,
      clientSecret: "gandooahmedabad",
      version: "uiapi(gandoo)-0.0.0",
    };

    const loginSuccessCallback = function (res) {
      localStorage.setItem("csfrToken", res.csfrToken);
      navigate("/box");
    };

    const loginErrorCallback = function (res) {
      setShowError(true);
      switch (res.payload) {
        case LoginErrorResponses.WRONG_CRED:
          setErrorMessage(t("login.error.wrong-cred"));
          break;
        default:
          setErrorMessage(t("login.error.default"));
          break;
      }
    };

    login_api.login(payload, loginSuccessCallback, loginErrorCallback);
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={loginLogo} alt="elenchus" />
        <h2 className="mt-6 text-center text-xl text-gray-900">elenchus</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="username-input"
                className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              <label
                htmlFor="password-input"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
