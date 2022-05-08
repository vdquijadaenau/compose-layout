import React from "react";

import { Stack } from "./StyledComponents";

interface FormGroupProps {
  gutter?: string;
  htmlFor?: string;
  label?: string;
  children?: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <Stack gutter='md'>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Stack>
  );
};
