import React from "react";
import ReactDOM from "react-dom/client";

// import Subscribe from "./components/Subscribe";
import FormSideBar from "./components/FormSideBar";
import { BaseStyles } from "./components/StyledComponents";
import "./reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseStyles padding='mdLg' maxWidth='85rem'>
      <FormSideBar />
    </BaseStyles>
  </React.StrictMode>
);
