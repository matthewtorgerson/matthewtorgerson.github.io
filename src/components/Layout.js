import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={{}}>
      <Fragment>
        {children}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}
