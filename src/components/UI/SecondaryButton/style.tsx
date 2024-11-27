import styled from "styled-components";

interface props {
  padding?: string;
  size?: string;
  alignself?: string;
}

export const StyleSecondButton = styled.button.withConfig({
  shouldForwardProp: (props) => props !== 'padding',
})<props>`
  padding: ${({ padding }) => padding || "6px 12px"};
  box-shadow: 0 0 0 1px inset #d5d8dd;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-weight: 600;
  font-size: 14px;
  height: 32px;
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ alignself }) => alignself || "auto"};
  ${({ size }) => (size ? `width: ${size}; height: ${size};` : "")}
`;
