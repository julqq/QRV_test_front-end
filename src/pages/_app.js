import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
	colors: {
		primary: "#D7DEE0",
		light: "#FFFFFF",
		dark: "#252525",
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
