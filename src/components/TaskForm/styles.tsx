import styled from "styled-components";

interface props {
  column: number;
}

export const StructureForm = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "column",
})<props>`
  display: grid;
  grid-template-columns: repeat(${({ column }) => column}, 1fr);
  grid-template-rows: repeat(8, min-content);
  grid-gap: 16px;
  padding-bottom: 16px;

  @media screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(14, min-content);
    grid-gap: 16px;
  }
`;

export const StretchingColumn = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "column",
})<props>`
  @media screen and (min-width: 993px) {
    ${({ column }) => (column > 1 ? "grid-column: span 2;" : "")}
  }
`;

export const PutRow = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

export const AllSpaceFree = styled.div`
  flex-grow: 1;
`;
