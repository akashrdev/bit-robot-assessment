"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DASH_VIEWS } from "../_components/sidebar/view-menu";

type UserContextType = {
  view: DASH_VIEWS;
  setView: (view: DASH_VIEWS) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<DASH_VIEWS>(DASH_VIEWS.DASHBOARD);

  return (
    <UserContext.Provider value={{ view, setView }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }
  return ctx;
}
