import styled from "styled-components";
import { Form } from "antd";

interface FormManagementProps {
  scroll: boolean;
}

export const WrapperCreateTask = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  min-width: 0;
  margin-bottom: 218px;
`;

export const Invision = styled.div`
  width: 100%;
  height: 0px;
`;

export const FormManagement = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "scroll",
})<FormManagementProps>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 16px;
  padding: 16px 0;
  position: ${({ scroll }) => (scroll ? "sticky" : "static")};
  background-color: #fff;
  z-index: 5;
  top: 0;
  filter: ${({ scroll }) =>
    scroll ? "drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.05))" : "none"};
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const SubtaskText = styled.h2`
  font-family: ${({ theme }) => theme.text.secondFamily};
  color: ${({ theme }) => theme.colors.font};
  font-weight: 400;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    text-transform: uppercase;
    color: #5c6470;
  }
`;

export const RightSide = styled.div`
  display: flex;
  gap: 4px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  padding-bottom: 24px;
  font-family: ${({ theme }) => theme.text.secondFamily};
  color: ${({ theme }) => theme.colors.font};
  font-weight: 600;
  font-size: 24px;
  line-height: 133%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
