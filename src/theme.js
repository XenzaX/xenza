import { createTheme } from "@nextui-org/react";

const light = createTheme({
  type: "light",
  className: "light-theme",
  theme: {}
});

const dark = createTheme({
  type: "dark",
  className: "dark-theme",
  theme: {}
});

export const theme = { light, dark };
