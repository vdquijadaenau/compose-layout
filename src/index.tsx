import React from "react";
import ReactDOM from "react-dom/client";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import "./reset.css";
import MenuBar2 from "./components/MenuBar2";
import styled from "styled-components";

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
      <MenuBar2 />
    </AppStyles>
  </React.StrictMode>
);
