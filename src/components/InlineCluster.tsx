import styled from "styled-components";
import { justifyAlignMap, spacingMap } from "./spacingMap";

export interface InlineClusterProps {
  gutter?: string;
  justify?: string;
  align?: string;
}

const InlineCluster = styled.div<InlineClusterProps>`
  --gutter: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.lg)};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${({ justify }) =>
    justify ? justifyAlignMap[justify] : justifyAlignMap.start};

  align-items: ${({ align }) =>
    align ? justifyAlignMap[align] : justifyAlignMap.start};
`;

export default InlineCluster;
