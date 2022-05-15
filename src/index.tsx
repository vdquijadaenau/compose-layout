import React from "react";
import ReactDOM from "react-dom/client";

// import Subscribe from "./components/Subscribe";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import "./reset.css";
import ContactList from "./components/Grid";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PadBox
      as={Center}
      padding='lg'
      maxWidth='85rem'
      style={{ fontFamily: "sans-serif" }}
    >
      <ContactList />
    </PadBox>
  </React.StrictMode>
);
