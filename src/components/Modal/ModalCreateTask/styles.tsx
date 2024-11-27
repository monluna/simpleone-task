import { Form } from "antd";
import styled from "styled-components";

export const BackgroundModal = styled.div`
  background: rgba(11, 12, 14, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 6;
  overflow-y: auto;
`;

export const ModalCreate = styled(Form)`
  display: flex;
  flex-direction: column;
  width: min(100%, 800px);
  height: fit-content;
  background-color: #fff;
  margin: 16px 0;
  z-index: 7;
  opacity: 1;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16), 0 4px 6px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.font};
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    text-transform: uppercase;
    color: #5c6470;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 4px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TitleNewTask = styled.h2`
  font-family: ${({ theme }) => theme.text.secondFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 133%;
  color: #0b0c0e;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 120%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 16px;
`;
