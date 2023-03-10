import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import wrapper from "../store";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepOrange, red } from "@mui/material/colors";

export default function MyApp({ Component, ...rest }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: deepOrange,
      error: red,
    },
  });

  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
}
