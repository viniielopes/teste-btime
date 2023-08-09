"use client";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider attribute="data-mode">{children}</ThemeProvider>;
};

export default Providers;
