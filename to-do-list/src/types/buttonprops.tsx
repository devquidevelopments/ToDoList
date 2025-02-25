import React from "react";

export interface ButtonProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}