"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const loggedInSubject = new BehaviorSubject<boolean>(false);

interface LoggedInProvider {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const initialLoggedInState: LoggedInProvider = {
  isLoggedIn: loggedInSubject.getValue(),
  setIsLoggedIn: () => {},
};

const LoggedInContext = createContext<LoggedInProvider>(initialLoggedInState);

export const LoggedInProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] =
    useState<LoggedInProvider>(initialLoggedInState);

  useEffect(() => {
    const subscription = loggedInSubject.subscribe((value) => {
      setLoggedIn((prevState) => ({
        ...prevState,
        isLoggedIn: value!,
      }));
    });
    return () => subscription.unsubscribe();
  }, []);

  const setIsLoggedIn = (value: boolean) => {
    loggedInSubject.next(value);
  };

  return (
    <LoggedInContext.Provider value={{ ...loggedIn, setIsLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedIn = (): LoggedInProvider => useContext(LoggedInContext);
