"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import {FaEye, FaEyeSlash, FaSignInAlt} from "react-icons/fa";
import { LoginRequest } from "@/models/LoginRequest";
import login from "@/services/auth-service";
import { useUser } from "@/providers/user-provider";
import {GrUserManager, GrUserWorker} from "react-icons/gr";

interface PasswordInputProps {
  setPassword: Dispatch<SetStateAction<string>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative">
      <input
        className="custom-input"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer"
      >
        {showPassword ? (
          <FaEyeSlash />
        ) : (
          <FaEye />
        )}
      </button>
    </div>
  );
};

const LoginForm = () => {
  const [isUser, setIsUser] = useState(true);
  const [isCraftsman, setIsCraftsman] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername } = useUser();

  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let loginRequest: LoginRequest = {
      email: email,
      password: password,
      role: 1,
    };

    try {
      const loggedInUser = await login(loginRequest);
      setUsername(loggedInUser.user.userName as string | null);
      localStorage.setItem("token", loggedInUser.token);
      localStorage.setItem("refreshToken", loggedInUser.refreshToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="w-full">
      <section className="min-h-[600px] flex xl:flex-row flex-col w-full text-white p-10">
        <div
          className="flex space-y-4 xl:w-1/2 w-[100%] xl:py-0 rounded-t-lg py-10 bg-no-repeat bg-cover xl:rounded-l-lg items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full ml-10 z-10 text-center xl:text-left">
            <h1 className="text-6xl font-bold text-center xl:text-left tracking-wide">
              Log In
            </h1>
            <div className="flex flex-row w-full justify-center xl:justify-start items-center gap-2">
              <p className="text-2xl my-4">as</p>
              {isUser ? (
                <>
                  <GrUserManager size={30} />
                  <p className="text-2xl my-4">USER</p>
                </>
              ) : (
                <>
                  <GrUserWorker size={30}/>
                  <p className="text-2xl my-4">CRAFTSMAN</p>
                </>
              )}
            </div>
            {isUser ? (
              <button
                onClick={() => {
                  setIsUser(false);
                  setIsCraftsman(true);
                }}
                className="pt-0 text-center text-gray-500 text-md dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              >
                Change to craftsman
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsUser(true);
                  setIsCraftsman(false);
                }}
                className="pt-0 text-center text-gray-500 text-md dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              >
                Change to user
              </button>
            )}
          </div>
        </div>
        <div className="xl:w-1/2 xl:py-0 py-10 w-full bg-green-300/20 rounded-b-lg xl:rounded-r-lg flex items-center justify-center text-center px-0 z-0">
          <div className="w-full pb-6 z-20">
            <div className="flex flex-col items-center justify-center gap-4 pb-4">
              <button
                type="button"
                className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-56 transition ease-in duration-200 text-center font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
                <p>Sign in with Facebook</p>
              </button>

              <button
                type="button"
                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-56 transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="divider"></div>
            <p className="text-gray-100">or use email your account</p>
            <form
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto text-gray-700"
              onSubmit={(event) => loginUser(event)}
            >
              <div className="pb-2 pt-4">
                <input
                  className="custom-input"
                  type="email"
                  placeholder="Email adress"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <PasswordInput setPassword={setPassword} />
              </div>
              <div className="text-right text-gray-200">
                <Link
                  className="text-sm hover:underline hover:text-gray-300"
                  href="login/forgot-password"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="px-4 flex items-center justify-center">
                <button type="submit" className="custom-button font-bold gap-3">
                    <FaSignInAlt />
                    Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
