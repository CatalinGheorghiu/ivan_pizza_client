import React from "react";
import {Flex, Link, Text} from "@chakra-ui/react";

const index = () => {
	return (
		// Footer
		<Flex
			as="footer"
			bottom="0"
			// pos="absolute"
			// flexShrink="0"
			w="100%"
			justifyContent="center"
		>
			{/* Footer's text*/}
			<Text
				mb="20px"
				w={["80%","100%"]}
				color="#fff"
				textAlign="center"
				fontWeight="bold">
				
				Ivan's Pizza 2021. Made with{" "}
				<i
					className="em em-sparkling_heart"
					aria-label="SPARKLING HEART"/>

				{" "} by
				<Link
					isExternal
					href="https://github.com/CatalinGheorghiu"
					color="#e7272d"
					_focus={{borderBottom: "1px solid #e7272d" }}
					_hover={{color: "#fff"}}> {" "}
					Catalin
				</Link>
			</Text>
		</Flex>
	
	);
};

export default index;
