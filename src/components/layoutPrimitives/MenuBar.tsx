import React from "react";
import Menu from "./Menu";
import InlineCluster from "./InlineCluster";

function MenuBar() {
  return (
    <Menu>
      <InlineCluster gutter='lg' justify='end' align='center'>
        <span>Product</span>
        <span>Features</span>
        <span>Marketplace</span>
        <span>Company</span>
        <span>Log in</span>
      </InlineCluster>
    </Menu>
  );
}

export default MenuBar;
