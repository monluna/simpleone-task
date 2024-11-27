import styled from "styled-components";
import { TreeSelect } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelTreeSelect = styled.label`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-weight: 600;
  line-height: 143%;
`;

export const StyleTreeSelect = styled(TreeSelect)`
  & .ant-select-selector {
    border: none !important;
    box-shadow: 0 0 0 1px inset #d5d8dd;
    border-radius: 4px !important;
    padding-inline: 4px !important;
    padding-block: 4px !important;
  }

  & .ant-select-selector:hover {
    box-shadow: 0 0 0 1px inset #005999;
    background: #fcfcfd;
  }

  & .ant-select-selection-item {
    background-color: #e5f4ff !important;
    box-shadow: 0 0 0 1px inset #99d5ff;
    border: none !important;
    font-family: ${({ theme }) => theme.text.fontFamily};
    line-height: 143% !important;
    font-weight: 400;
    font-size: 14px;
    text-align: center !important;
    margin-block: 0 !important;
    padding: 2px 32px 2px 8px !important;
    padding: 2px 8px !important;
    align-items: center;
    flex: none;
    border-radius: 4px;
  }
  & .ant-select-selection-overflow {
    gap: 4px 0;
  }

  & .ant-select-clear {
    transform: translate(0, -50%);
    margin-top: 0px;
    margin-right: -3px;
    width: 16px;
    height: 16px;
  }

  & .anticon {
    height: 16px;
    width: 16px;
    margin-left: 8px !important;
  }

  & .ant-select-selection-item-content {
    margin-inline-end: 0 !important;

    @media screen and (max-width: 767px) {
      max-width: 158px;
    }
  }
`;
