import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -1px 0 0 inset #d5d8dd;
  padding: 8px 16px;
  @media screen and (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const LogoHeader = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIconContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SearchRightHeader = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserAndSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const NameUser = styled.p`
  line-height: 143%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
