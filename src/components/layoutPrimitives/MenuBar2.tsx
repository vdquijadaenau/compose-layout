import React from "react";
import styled, { css } from "styled-components";
import InlineCluster from "./InlineCluster";
import { Logo, Button, MenuContainer } from "./MenuParts";
import { ComposingMap } from "./spacingMap";

const stretchMap: ComposingMap = {
  all: `> *  { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};

interface InlineProps {
  stretch?: string | number;
  switchAt?: string | number;
}

const responsive = css<InlineProps>`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};
  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

const Inline = styled(InlineCluster)<InlineProps>`
  flex-wrap: nowrap;

  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) { flex: 1 }`;
    }
    return stretch ? stretchMap[stretch] : "";
  }}
  ${({ switchAt }) => (switchAt ? switchAt : responsive)}
`;

export default function MenuBar2() {
  return (
    <MenuContainer>
      <Inline stretch={1} align='center' switchAt='40rem'>
        <div>
          <Logo />
        </div>
        <InlineCluster gutter='md' justify='center' align='center'>
          <span>Product</span>
          <span>Features</span>
          <span>Marketplace</span>
          <span>Company</span>
        </InlineCluster>
        <Inline gutter='md' align='center' justify='end'>
          <span>Sign in</span>
          <Button>Sign up</Button>
        </Inline>
      </Inline>
    </MenuContainer>
  );
}
