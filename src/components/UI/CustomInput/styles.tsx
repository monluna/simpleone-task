import styled from "styled-components";
import { Form, Input } from "antd";

export const LabelInput = styled(Form.Item)`
  &.ant-form-item-required {
    color: ${({ theme }) => theme.colors.font} ;
  }
  & .ant-form-item-label {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-weight: 600;
    line-height: 143%;
    padding: 0 0 7px !important;
  }

  &.ant-form-item-required::before {
    font-family: ${({ theme }) => theme.text.fontFamily} !important;
    font-weight: 600;
    line-height: 143% !important;
    color: #b21f00 !important;
  }

  &.ant-form-item {
    font-family: ${({ theme }) => theme.text.fontFamily};
    margin-bottom: 0;
  }

`;

export const StyledInput = styled(Input)`
  border:none;
  box-shadow: 0 0 0 1px inset #d5d8dd;
  border-radius: 4px;
  padding: 6px 8px;
  background: #fcfcfd;
  line-height: 143%;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-weight: ${({ theme }) => theme.text.fontWeight};

  & .ant-input::placeholder {
    color: #abb1ba;
  }

  &:hover{
    border-color: #005999;
    background: #fcfcfd;
  }
`;
