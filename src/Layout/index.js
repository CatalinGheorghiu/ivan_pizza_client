import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Flex} from "@chakra-ui/react";

const Layout = (props) => {
	return (
		<Flex
			as="header"
			direction="column"
			maxW={{xl: "100vw"}}
			{...props}
		>
			<Header/>
			{props.children}
			<Footer/>
		</Flex>
	);
};

export default Layout;
