"use client";
import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    if (isSidebarOpen) {
      document.getElementById("leftSidebar")!.classList.remove("hidden");
    } else {
      document.getElementById("leftSidebar")!.classList.add("hidden");
    }
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
