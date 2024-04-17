"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { LoginRequest } from "@/models/LoginRequest";
import login from "@/services/auth-service";
import { useUser } from "@/providers/user-provider";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
      <section className="min-h-[70vh] flex items-stretch text-white m-10">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover rounded-l-3xl relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-6xl font-bold text-left tracking-wide">
              Log In
            </h1>
            <div className="flex flex-row items-center gap-2">
              <p className="text-2xl my-4">as</p>
              {isUser ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <p className="text-2xl my-4">USER</p>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
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
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4"></div>
        </div>
        <div className="lg:w-1/2 bg-green-300/20 rounded-r-3xl w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <div className="flex flex-col items-center justify-center gap-4 max-w-sm pb-4 ">
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
                <button type="submit" className="custom-button font-bold">
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
