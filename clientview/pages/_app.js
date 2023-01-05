import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/theme";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
