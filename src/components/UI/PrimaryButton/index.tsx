import { MouseEventHandler, ReactNode } from 'react';
import { StylePrimaryButton } from './style';

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function PrimaryButton({ onClick, children}: Props) {
  return <StylePrimaryButton onClick={onClick}>{ children}</StylePrimaryButton>;
}
