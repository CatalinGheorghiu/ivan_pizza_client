import React        from "react";
import {Flex, Text} from "@chakra-ui/react";

const index = () => {
	return (
		<section>
			<Flex
				height="82vh"
				justifyContent="space-around"
				alignItems="center"
				bg={`#4FB69F url(${require("../../Img/bg2.jpg").default}) no-repeat right top`}
				color="#fff"
				direction={["column", "column", "column", "row"]}
			>
				<Text as="h1" fontSize="3xl">Contact master Ivan for more
					details!</Text>
			</Flex>
		</section>
	);
};

export default index;
