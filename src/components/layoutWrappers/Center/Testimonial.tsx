import React from "react";
import styled from "styled-components";
import { Attribution } from "./testimonialComponents";

const Center = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
`;

function Testimonial() {
  return (
    <div>
      <h2>Home4Hire</h2>
      <p>
        "Lorem ipsum dolor sit amet, nibh lorem convenire quo et. Usu ea libris
        omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, qui ne
        scripta docendi."
      </p>
      <Attribution />
    </div>
  );
}

export default Testimonial;
