import {
  WrapperHeader,
  LogoHeader,
  NavIconContainer,
  RightHeader,
  SearchRightHeader,
  UserAndSettings,
  UserImg,
  NameUser,
} from "./styles";
import PersonaImg from "../../assets/images/ImagePersona.png";
import { Search, SearchProps } from "../UI/Search";
import {
  IconLogo,
  IconSidebar,
  IconSearch,
  IconSettings,
} from "../../assets/icons";
import SecondaryButton from "../UI/SecondaryButton";

const user = {
  fullName: "Максим Галактионов",
  img: PersonaImg,
};

export default function Header({
  refOnScreen,
}: {
  refOnScreen: React.MutableRefObject<null>;
}) {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <WrapperHeader ref={refOnScreen}>
      <a href="#">
        <LogoHeader>
          <IconLogo />
        </LogoHeader>
        <NavIconContainer>
          <IconSidebar />
        </NavIconContainer>
      </a>
      <RightHeader>
        <SearchRightHeader>
          <Search
            placeholder="Поиск"
            onSearch={onSearch}
            suffix={<IconSearch />}
            width="296px"
          />
        </SearchRightHeader>
        <UserAndSettings>
          <UserImg src={user.img} alt="Persona" />
          <NameUser>{user.fullName}</NameUser>
          <SecondaryButton padding="6px">
            <IconSettings />
          </SecondaryButton>
        </UserAndSettings>
      </RightHeader>
    </WrapperHeader>
  );
}
