import styled from "styled-components";

export const StylePrimaryButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  background: #0078cf;
  color: #fff;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-weight: 600;
  font-size: 14px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
