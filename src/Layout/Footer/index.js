import React              from "react";
import {Flex, Link, Text} from "@chakra-ui/react";

const index = () => {
	return (
		<footer>
			<Flex
				h="8vh"
				w="100%"
				backgroundColor="#222222"
				justifyContent="center"
				alignItems="center"
			>
				<Text color="#fff" fontWeight="bold" mr="5px">
					Ivan's Pizza 2021. Made with <i
					className="em em-sparkling_heart"
					aria-label="SPARKLING HEART"/> and passion by
				</Text>
				<Link color="#e7272d" _hover={{color: "#fff", stroke: "blue"}}> Ares
					Catalin</Link>
			</Flex>
		</footer>
	);
};

export default index;
