import styled from "styled-components";

interface props{
  open: boolean;
}

export const WrapperNavigation = styled.div`
  display: flex;
`;

export const LeftNavigation = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: -1px 0 0 0 inset #d5d8dd;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightNavigation = styled.div<props>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  box-shadow: 1px 0 0 0 #d5d8dd;
`;

export const LeftLink = styled.button`
  padding: 16px;
  & svg{
    height: 24px;
    width: 24px;
  }
`;

export const SearchNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  box-shadow: 0 -1px 0 0 inset #d5d8dd;
`;

export const StructuresNavigation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Structures = styled.button`
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  background: #fcfcfd;
`;

