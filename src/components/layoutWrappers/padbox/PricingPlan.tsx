import React from "react";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import { Grid } from "@bedrock-layout/grid";

import {
  Card,
  Top,
  Bottom,
  Button,
  Description,
  Price,
  PlanName,
  PadBox,
} from "./CardParts";

const PricingPlan = () => {
  return (
    <Card>
      <PadBox>
        <Top>
          <PlanName>Basic</PlanName>
          <Description>All the basics for getting started</Description>
          <Price>$12/Mo</Price>
          <InlineCluster gutter='none' justify='center'>
            <Button>Buy Basic</Button>
          </InlineCluster>
        </Top>
      </PadBox>
      <Bottom>
        <PadBox>
          <Stack gutter='md'>
            <span>What's included</span>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Mollis pretium lorem primis senectus habitasse</li>
              <li>Phasellus ante pellentesque erat</li>
            </ul>
          </Stack>
        </PadBox>
      </Bottom>
    </Card>
  );
};

export default function PlanList() {
  return (
    <Grid gutter='xl' minItemWidth='16rem'>
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
    </Grid>
  );
}
