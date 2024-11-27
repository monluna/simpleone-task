import { GetProps, Input } from "antd";
import { StyledSearch } from "./styles";

interface Props {
  placeholder?: string;
  onSearch?:
    | ((
        value: string,
        event?:
          | React.ChangeEvent<HTMLInputElement>
          | React.MouseEvent<HTMLElement>
          | React.KeyboardEvent<HTMLInputElement>,
        info?: {
          source?: "clear" | "input";
        }
      ) => void)
    | undefined;
  suffix?: JSX.Element;
  width: string;
}

export type SearchProps = GetProps<typeof Input.Search>;

const Search = ({ onSearch, placeholder, suffix, width }: Props) => {
  return (
    <StyledSearch
      onSearch={onSearch}
      placeholder={placeholder}
      suffix={suffix}
      width={width}
    />
  );
};

export { Search };
