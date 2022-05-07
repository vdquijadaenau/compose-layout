import React from "react";
import ReactDOM from "react-dom/client";

import { Center } from "@bedrock-layout/center";
import styled from "styled-components";
import Subscribe from "./components/stack1";

import "./reset.css";

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
    <BaseStyles>
      <Subscribe />
    </BaseStyles>
  </React.StrictMode>
);
