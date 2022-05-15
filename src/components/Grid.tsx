import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";

interface GridProps {
  gutter?: string;
  minItemWidth?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.lg)};

  grid-template-columns: repeat(
    auto-fit,
    minmax(
      min(
        ${({ minItemWidth }) => (minItemWidth ? minItemWidth : "24rem")},
        100%
      ),
      1fr
    )
  );
`;

function ContactList() {
  return (
    <Grid gutter='xl' minItemWidth='24rem'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}

export default ContactList;
