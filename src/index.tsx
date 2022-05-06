import React from "react";
import ReactDOM from "react-dom/client";

import { Center } from "@bedrock-layout/center";
import styled from "styled-components";

import "./reset.css";
import App from "./App";

const BaseStyles = styled(Center)`
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseStyles />
  </React.StrictMode>
);
