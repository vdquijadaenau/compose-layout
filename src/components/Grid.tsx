import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";

interface GridProps {
  gutter?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.lg)};

  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`;

function ContactList() {
  return (
    <Grid>
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
