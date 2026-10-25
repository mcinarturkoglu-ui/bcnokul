"use client";

import React, { createContext, useCallback, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isAdmissionOpen: boolean;
  openAdmission: (preselectedLevel?: string) => void;
  closeAdmission: () => void;
  selectedLevel: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const openAdmission = (level?: string) => {
    if (level) setSelectedLevel(level);
    setIsAdmissionOpen(true);
  };

  const closeAdmission = useCallback(() => {
    setIsAdmissionOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isAdmissionOpen,
        openAdmission,
        closeAdmission,
        selectedLevel,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
