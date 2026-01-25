"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface PrintContextType {
  isPrinting: boolean;
  setIsPrinting: (value: boolean) => void;
}

const PrintContext = createContext<PrintContextType | undefined>(undefined);

export function PrintProvider({ children }: { children: ReactNode }) {
  const [isPrinting, setIsPrinting] = useState(false);

  return (
    <PrintContext.Provider value={{ isPrinting, setIsPrinting }}>
      {children}
    </PrintContext.Provider>
  );
}

export function usePrint() {
  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("usePrint must be used within a PrintProvider");
  }
  return context;
}

// Safe version that doesn't throw - returns false if no provider
export function usePrintSafe(): boolean {
  const context = useContext(PrintContext);
  return context?.isPrinting ?? false;
}
