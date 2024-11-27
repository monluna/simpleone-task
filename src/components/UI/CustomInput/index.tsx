import { Rule } from "antd/es/form";
import { LabelInput, StyledInput } from "./styles";

interface Props {
  name?: string;
  label?: string;
  rules?: Rule[];
  placeholder?: string;
}

const CustomInput = ({ name, label, rules, placeholder}: Props) => {
  return (
    <LabelInput name={name} label={label} rules={rules}>
      <StyledInput placeholder={placeholder}/>
    </LabelInput>
  );
};

export { CustomInput };
