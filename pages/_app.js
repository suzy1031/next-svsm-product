import React from "react";

import App from "next/app";
import "../styles/globals.css";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import basicAuthCheck from "../src/basicAuthCheck";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { req, res } = appContext.ctx;
  if (req && res && process.env.ENABLE_BASIC_AUTH === "true") {
    await basicAuthCheck(req, res);
  }

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
