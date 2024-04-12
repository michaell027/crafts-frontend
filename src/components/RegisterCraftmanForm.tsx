"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import logo from "@public/assets/images/craft-makers-logo/png/logo-no-background.png";

const Logo = () => {
  return <Image src={logo} alt="logo" width={200} height={150} />;
};

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="relative text-gray-700">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </>
  );
};

const RegisterCraftsmanForm = () => {
  const [step, setStep] = useState(1);

  function handleContinue() {
    setStep(step + 1);
  }

  return (
    <main>
        <div className="flex items-center justify-center w-full h-[89vh]">
          <div className="bg-green-300/20 text-white rounded-3xl shadow-xl overflow-hidden w-[90%]">
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 py-10 px-10 bg-[#0d1017]">
                <div className="w-full flex flex-col items-center">
                  <Logo />
                </div>
                <div className="flex flex-row pt-6 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p>1.</p>
                </div>
                <div className="flex flex-row pt-6 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p>2.</p>
                </div>
                <div className="flex flex-row pt-6 gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p>3.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-6">
                  <h1 className="font-bold text-3xl pb-2 text-white">
                    CRAFTSMAN REGISTER
                  </h1>
                  <div className="divider"></div>
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
                  <div className="divider">OR</div>
                  <p>enter your information to register</p>
                </div>
                <div className="text-gray-700">
                  <div className="flex items-center h-auto">
                    <div className="w-full mb-4">
                      <input
                        type="email"
                        placeholder="Email adress"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full mb-4">
                      <PasswordInput />
                    </div>
                  </div>
                    <div className="flex items-center h-auto">
                      <div className="w-full mb-6">
                        <input
                            type="password"
                            placeholder="Repeat password"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 mb-5">
                      <button
                        onClick={handleContinue}
                        className="block w-fit px-6 max-w-xs mx-auto bg-green-700 hover:bg-green-900 focus:bg-green-900 text-white rounded-lg py-3 font-semibold"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
};

export default RegisterCraftsmanForm;
