import styled from "styled-components";
import { Input } from "antd";

interface props {
  width: string;
}

export const StyledSearch = styled(Input.Search)<props>`
  width: ${({ width }) => width};
  height: 32px;
  & .ant-input-outlined {
    background: #fcfcfd;
  }
  & .ant-input-affix-wrapper {
    padding: 6px 8px;
    border-radius: 4px !important;
    border: none;
    box-shadow: 0 0 0 1px inset #d5d8dd;
  }
  & .ant-input-group-addon {
    display: none;
  }

  & .ant-input {
    line-height: 143%;

    font-family: ${({ theme }) => theme.text.fontFamily};
    font-weight: ${({ theme }) => theme.text.fontWeight};
  }

  & .ant-input::placeholder {
    color: #abb1ba ;
  }
`;
