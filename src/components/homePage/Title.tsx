"use client";
import { useState } from "react";
import { useDictionary } from "@/providers/dictionary-provider";
import RotateText from "@/components/homePage/RotateText";

const Title = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const dictionary = useDictionary();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 745, behavior: "smooth" });
  };

  return (
    <div>
      <section className="bg-center w-full flex items-center justify-center min-h-[90vh] bg-no-repeat dark:bg-[url('https://wallpapercave.com/wp/wp7441429.jpg')] bg-[url('https://www.hdwallpapers.in/download/green_white_swirl_lines_4k_hd_abstract-3840x2160.jpg')] bg-gray-700 dark:bg-blend-multiply bg-blend-soft-light">
        <div className="text-center my-auto mx-4">
          <h1 className="mb-8 text-4xl mt-16 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {dictionary.component.home.title}
          </h1>
          <p className="mb-16 text-lg font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-24 mt-10">
            {dictionary.component.home.description}
          </p>
          <RotateText />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <button
              onClick={() => setShowRegistrationModal(true)}
              className="inline-flex w-fit justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
            >
              {dictionary.component.home.register}
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={handleScroll}
              className="inline-flex w-fit justify-center hover:text-gray-900 items-center py-3 px-5 font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100"
            >
              {dictionary.component.home.readMore}
            </button>
          </div>
          <button onClick={handleScroll}>
            <div className="flex justify-center w-full mt-16 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/*{showModal && (*/}
      {/*  <div className="z-50 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80 py-10">*/}
      {/*    <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">*/}
      {/*      <div className="w-full">*/}
      {/*        <div className="m-8 flex justify-center items-center flex-col my-20 max-w-[400px] mx-auto">*/}
      {/*          <div className="mb-8">*/}
      {/*            <h1 className="mb-4 text-3xl text-center font-extrabold">*/}
      {/*              Obchodné podmienky*/}
      {/*            </h1>*/}
      {/*            <p className="text-gray-600 text-center">*/}
      {/*              Get the most out of Twitter by staying up to date with*/}
      {/*              what's happening.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*          <div className="space-y-4">*/}
      {/*            <div className="form-control">*/}
      {/*              <label className="label gap-6 px-6 cursor-pointer">*/}
      {/*                <span className="label-text">*/}
      {/*                  Prečítal/a som si obchodné podmienky a súhlasím s nimi*/}
      {/*                </span>*/}
      {/*                <input*/}
      {/*                  type="checkbox"*/}
      {/*                  className="checkbox"*/}
      {/*                  checked={isChecked}*/}
      {/*                  onChange={handleCheckboxChange}*/}
      {/*                />*/}
      {/*              </label>*/}
      {/*            </div>*/}
      {/*            {isChecked ? (*/}
      {/*              <button*/}
      {/*                disabled={false}*/}
      {/*                onClick={() => setShowModal(false)}*/}
      {/*                className="p-3 px-16 bg-black rounded-full text-white w-full font-semibold"*/}
      {/*              >*/}
      {/*                Zatvoriť*/}
      {/*              </button>*/}
      {/*            ) : (*/}
      {/*              <button*/}
      {/*                disabled={true}*/}
      {/*                className="p-3 px-16 bg-gray-300 rounded-full text-white w-full font-semibold"*/}
      {/*              >*/}
      {/*                Zatvoriť*/}
      {/*              </button>*/}
      {/*            )}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{showRegistrationModal && (*/}
      {/*  <div className="z-50 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80 py-10">*/}
      {/*    <div className="max-h-full w-full max-w-3xl overflow-y-auto sm:rounded-2xl bg-white">*/}
      {/*      <div className="w-full">*/}
      {/*        <div className="m-8 flex justify-center items-center flex-col my-12 max-w-[1000px] mx-auto">*/}
      {/*          <div className="flex items-center justify-center flex-col">*/}
      {/*            <div className="p-5">*/}
      {/*              <div className="flex flex-col justify-center items-center text-center">*/}
      {/*                <div className="font-bold text-black text-5xl font-sans">*/}
      {/*                  Who are you?*/}
      {/*                </div>*/}
      {/*                <div className="text-black max-w-lg mt-5">*/}
      {/*                  Chcete sa zaregistrovať ako "človek" alebo ako*/}
      {/*                  "remeselník"?*/}
      {/*                </div>*/}
      {/*              </div>*/}

      {/*              <div className="flex flex-col gap-8 md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">*/}
      {/*                <button className="bg-[#046d4f]/50 rounded-xl hover:scale-110 transition-transform duration-500">*/}
      {/*                  <div className="flex flex-col text-black justify-center items-center p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">*/}
      {/*                    <svg*/}
      {/*                      xmlns="http://www.w3.org/2000/svg"*/}
      {/*                      fill="none"*/}
      {/*                      viewBox="0 0 24 24"*/}
      {/*                      strokeWidth={1.5}*/}
      {/*                      stroke="currentColor"*/}
      {/*                      className="w-10 h-10"*/}
      {/*                    >*/}
      {/*                      <path*/}
      {/*                        strokeLinecap="round"*/}
      {/*                        strokeLinejoin="round"*/}
      {/*                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"*/}
      {/*                      />*/}
      {/*                    </svg>*/}
      {/*                    <div className="mt-3 font-semibold text-lg">*/}
      {/*                      POUŽÍVATEĽ*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </button>*/}

      {/*                <button className="bg-[#046d4f]/50 rounded-xl hover:scale-110 transition-transform duration-500">*/}
      {/*                  <div className="flex flex-col text-black justify-center items-center p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">*/}
      {/*                    <svg*/}
      {/*                      xmlns="http://www.w3.org/2000/svg"*/}
      {/*                      fill="none"*/}
      {/*                      viewBox="0 0 24 24"*/}
      {/*                      strokeWidth={1.5}*/}
      {/*                      stroke="currentColor"*/}
      {/*                      className="w-10 h-10"*/}
      {/*                    >*/}
      {/*                      <path*/}
      {/*                        strokeLinecap="round"*/}
      {/*                        strokeLinejoin="round"*/}
      {/*                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"*/}
      {/*                      />*/}
      {/*                      <path*/}
      {/*                        strokeLinecap="round"*/}
      {/*                        strokeLinejoin="round"*/}
      {/*                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"*/}
      {/*                      />*/}
      {/*                    </svg>*/}

      {/*                    <div className="mt-3 font-semibold text-lg">*/}
      {/*                      REMESELNÍK*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </button>*/}
      {/*              </div>*/}

      {/*              <div className="flex justify-center">*/}
      {/*                <button*/}
      {/*                  onClick={() => setShowRegistrationModal(false)}*/}
      {/*                  className="mt-12 bg-slate-900 text-white px-8 rounded-full py-3"*/}
      {/*                >*/}
      {/*                  ZATVORIŤ*/}
      {/*                </button>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Title;
