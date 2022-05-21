import React from "react";
import styled from "styled-components";
import { Stack } from "@bedrock-layout/stack";
import { spacingMap } from "../../layoutPrimitives/spacingMap";

interface IProps {
  gutter?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
`;

export const Top = (props: IProps) => <Stack {...props} gutter='md' />;

export const Bottom = styled.div`
  border-top: 1px solid black;
`;

export const Button = styled.div`
  background: black;
  color: white;
  border: node;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  color: grey;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const PlanName = styled.strong`
  font-size: 1.25rem;
`;

export const PadBox = styled.div<IProps>`
  padding: ${({ padding }) => {
    const pads: string[] = [];

    if (padding) {
      return pads
        .concat(padding)
        .map((padKey) => spacingMap[padKey])
        .join(" ");
    }
  }};
`;
