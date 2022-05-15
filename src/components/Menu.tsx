import React, { Children } from "react";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";

import styled from "styled-components";

const Logo = styled.div`
  border-radius: 50%;
  background-color: black;
`;

const MenuContainer = styled(PadBox)`
  border: 1px solid black;
`;

const Menu = styled(Split)`
  > ${Logo} {
    inline-size: 3rem;
    max-inline-size: 3rem;
    block-size: 3rem;
  }
`;

interface MenuProps {
  children: React.ReactNode;
}

export default function ({ children }: MenuProps) {
  return (
    <MenuContainer>
      <Menu gutter='lg' switchAt='35rem' fraction='auto-start'>
        <Logo />
        {children && children}
      </Menu>
    </MenuContainer>
  );
}
