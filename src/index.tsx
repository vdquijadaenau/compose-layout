import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";

import "./reset.css";
import PricingPlans from "./components/layoutWrappers/padbox/PricingPlan";

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: "md",
  maxWidth: "85rem",
}))`
  font-family: sans-serif;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppStyles>
      <PricingPlans />
    </AppStyles>
  </React.StrictMode>
);
