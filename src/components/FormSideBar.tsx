import React from "react";

import { Split } from "./StyledComponents";
import Form from "./Form";

function FormSideBar() {
  return (
    <Split gutter='xxl'>
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  );
}

export default FormSideBar;
