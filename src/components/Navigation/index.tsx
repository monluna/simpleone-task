import {
  WrapperNavigation,
  LeftNavigation,
  LeftLink,
  SearchNavigation,
  StructuresNavigation,
  Structures,
  RightNavigation,
} from "./styles";
import { Search, SearchProps } from "../UI/Search";
import { IconStar, IconFilter, IconNoPin, IconFootprint, IconSidebar } from "../../assets/icons";
import SecondaryButton from "../UI/SecondaryButton";
import { useState } from "react";
import useResponsiveValue from "../../hooks/useResponsiveValue";
import { dataStructuresNavigation } from "../../assets/data/dataStructuresNavigation";

export default function Navigation() {
  const {
    isDesktop
  } = useResponsiveValue(false);
  const [open, setOpen] = useState(isDesktop);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <WrapperNavigation>
      <LeftNavigation>
        <LeftLink onClick={() => setOpen((prev) => !prev)}>
          <IconSidebar fill={open ? "#005999" : "#2e3238"} />
        </LeftLink>
        <LeftLink>
          <IconStar />
        </LeftLink>
      </LeftNavigation>
      <RightNavigation open={open}>
        <SearchNavigation>
          <Search
            placeholder="Поиск по меню"
            onSearch={onSearch}
            suffix={<IconFilter />}
            width="208px"
          />
          <SecondaryButton padding="6px">
            <IconNoPin />
          </SecondaryButton>
        </SearchNavigation>
        <StructuresNavigation>
          {dataStructuresNavigation.map((structure) => (
            <Structures key={structure}>
              <IconFootprint />
              {structure}
            </Structures>
          ))}
        </StructuresNavigation>
      </RightNavigation>
    </WrapperNavigation>
  );
}
