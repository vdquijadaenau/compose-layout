import styled from "styled-components";

type SpacingMap = {
  [key: string]: string;
};

const spacingMap: SpacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

interface StackProps {
  gutter: string;
}

export const Stack = styled.div<StackProps>`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? "1rem"};
`;
