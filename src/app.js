import useDarkMode from "use-dark-mode";
import { Switch, Text, useTheme, styled } from "@nextui-org/react";

const Box = styled("div", {
  gap: "$lg",
  dflex: "center",
  minWidth: "100vw",
  minHeight: "100vh",
  flexFlow: "column nowrap"
});

export const App = () => {
  const { type } = useTheme();

  const darkMode = useDarkMode(false);

  return (
    <Box>
      <Text span size={24}>
        The current theme is:{" "}
        <Text
          span
          weight="bold"
          css={{
            fs: "inherit",
            textGradient: "45deg, $purple600 -20%, $pink600 100%"
          }}
        >
          {type}
        </Text>
      </Text>
      <Switch
        size="lg"
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
      />
    </Box>
  );
};
