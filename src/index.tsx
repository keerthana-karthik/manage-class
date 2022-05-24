import * as React from "react";
import { render } from "react-dom";

import { Box, Grommet, Heading } from "grommet";

const theme = {
  name: "default",
  rounding: 4,
  spacing: 24,
  global: {
    font: {
      family: "'Roboto'"
    }
  }
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Heading level="1">Hello</Heading>
      <Box pad="small">Grommet v2</Box>
    </Grommet>
  );
};

render(<App />, document.getElementById("root"));
