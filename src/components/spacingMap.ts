export type ComposingMap = {
  [key: string]: string;
};

export const spacingMap: ComposingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

export const gridFractions: ComposingMap = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const justifyAlignMap: ComposingMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};
