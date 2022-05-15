import React from "react";
import { Frame } from "@bedrock-layout/frame";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "./StyledComponents";
import { Stack } from "./StyledComponents";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import styled from "styled-components";

const Avatar = styled(Frame).attrs(() => ({ ratio: [1, 1] }))`
  border-radius: 50%;
  background-color: black;
`;

function Grid() {
  return <div>Grid</div>;
}

export default Grid;
