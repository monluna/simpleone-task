import { MouseEventHandler, ReactNode } from "react";
import { StyleSecondButton } from "./style";

interface props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  padding?: string;
  size?: string;
  alignself?: string;
}

export default function SecondaryButton({ onClick, children, padding, size, alignself }: props) {
  return (
    <StyleSecondButton onClick={onClick} padding={padding} size={size} alignself={alignself}>
      {children}
    </StyleSecondButton>
  );
}
