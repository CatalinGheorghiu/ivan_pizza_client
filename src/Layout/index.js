import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Flex} from "@chakra-ui/react";

const Layout = (props) => {
	return (
		<Flex
			minH="100vh"
			pos="relative"
			bgImage={`url(${require("../Img/work.jpg").default})`}
			bgSize="cover"
			bgRepeat="no-repeat"
			direction="column"
		>
			<Header/>
			{props.children}
			<Footer/>
		</Flex>
	);
};

export default Layout;
