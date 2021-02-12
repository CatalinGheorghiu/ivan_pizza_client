import React                from "react";
import {Center, Flex, Text} from "@chakra-ui/react";

const NotFound = () => {
	return (
		<Flex>
			<Center>
				<Text textStyle="xl" color="#fff">404: Ouuu shnaps! This page isn't
					available!</Text>
			</Center>
		</Flex>
	);
};

export default NotFound;
