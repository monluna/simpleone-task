// import { TreeSelect } from "antd";
import { Wrapper, LabelTreeSelect, StyleTreeSelect } from "./styles";
import { ChangeEventExtra } from "rc-tree-select/lib/interface";
import { RenderNode } from "rc-select/lib/BaseSelect";

interface Props {
  label?: string;
  treeData?: {
    title: string;
    value: string;
    key: string;
  }[];
  treeCheckable?: React.ReactNode;
  showSearch?: boolean;
  suffixIcon?: React.ReactNode;
  allowClear?:
    | boolean
    | {
        clearIcon?: RenderNode;
      };
  value?: string | string[];
  onChange?: (
    value: unknown,
    labelList: React.ReactNode[],
    extra: ChangeEventExtra
  ) => void;
}

const CustomTreeSelect = ({
  label,
  treeData,
  treeCheckable,
  showSearch,
  suffixIcon,
  allowClear,
  value,
  onChange,
}: Props) => {
  return (
    <Wrapper>
      <LabelTreeSelect>{label}</LabelTreeSelect>
      <StyleTreeSelect
        treeData={treeData}
        treeCheckable={treeCheckable}
        showSearch={showSearch}
        suffixIcon={suffixIcon}
        allowClear={allowClear}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export { CustomTreeSelect };
