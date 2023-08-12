"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const element = document.querySelector("#modal");

  if (element === null) {
    return null;
  }

  return createPortal(children, element);
};
