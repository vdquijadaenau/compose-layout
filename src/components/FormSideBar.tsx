import React from "react";

import { Split } from "./StyledComponents";
import Form2 from "./Form2";

function FormSideBar() {
  return (
    <Split gutter='lg'>
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form2 />
    </Split>
  );
}

export default FormSideBar;
