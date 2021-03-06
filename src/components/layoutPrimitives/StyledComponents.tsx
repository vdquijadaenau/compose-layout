import styled from "styled-components";
import { Center } from "@bedrock-layout/center";
import { PadBox } from "@bedrock-layout/padbox";
import { spacingMap, gridFractions } from "./spacingMap";

interface BaseProps {
  padding?: string;
  maxWidth?: string;
  children: React.ReactNode;
}

interface StackProps {
  gutter?: string;
}

interface SplitProps {
  gutter?: string;
  fraction?: string;
}

interface ColumnsProps {
  gutter?: string;
  columns?: number;
}

interface ColumnProps {
  $span?: number;
}

export const BaseStyles = styled(Center).attrs(() => ({
  as: PadBox,
}))<BaseProps>`
  input {
    border: 1px solid black;
    background: white;
  }

  button {
    color: white;
    background: black;
    border: none;
  }
  hr {
    margin: 0;
  }
`;

export const Split = styled.div<SplitProps>`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.lg)};
  grid-template-columns: ${({ fraction }) =>
    fraction ? gridFractions[fraction] : gridFractions["1/2"]};
`;

export const Stack = styled.div<StackProps>`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : "1rem")};
`;

export const Columns = styled.div<ColumnsProps>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.lg)};
  grid-template-columns: repeat(var(--columns), 1f);
`;

export const Column = styled.div<ColumnProps>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;
