import { StrictMode } from "react";
import useDarkMode from "use-dark-mode";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { App } from "./app";
import { theme } from "./theme";

const container = createRoot(document.getElementById("root"));

const Root = () => {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? theme.dark : theme.light}>
      <App />
    </NextUIProvider>
  );
};

container.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
