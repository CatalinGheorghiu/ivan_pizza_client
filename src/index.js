import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import App from "./App";
import Fonts from "./Theme/Fonts";

const theme = extendTheme({
	fonts: {
		heading: "Poppins",
		body: "Poppins",
	},
	components: {
		SubmitButtons: {
			bg: "#e7272d"
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Fonts/>
		<ChakraProvider theme={theme}>
			<App/>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

