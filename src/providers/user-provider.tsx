"use client";
import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";

interface UserContextType {
  username: string | null;
  setUsername: Dispatch<SetStateAction<string | null>>;
}

const UserContext = createContext<UserContextType>({
  username: null,
  setUsername: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsernameState] = useState<string | null>(
    localStorage.getItem("username"),
  );

  const setUsername: UserContextType["setUsername"] = (newUsername) => {
    if (typeof newUsername === "function") {
      setUsernameState((prevState) => {
        const newValue = newUsername(prevState);
        localStorage.setItem("username", newValue || "");
        return newValue;
      });
    } else {
      localStorage.setItem("username", newUsername || "");
      setUsernameState(newUsername);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername !== null) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
