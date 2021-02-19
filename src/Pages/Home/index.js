import React from "react";
import {Link as ReachLink} from "react-router-dom";
import {Flex, Heading, Link, Text} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";


const Home = () => {
	return (
		
		<Flex
			as="main"
			align="center"
			flex="1 0 auto"
			ml="10vw"
		>
			<Flex
				direction="column"
				justify="space-between"
				w={["350px", "450px"]}
			>
				<Text
					as="p"
					color="#e7272d"
					fontWeight="bold"
					letterSpacing={["0.25em", "0.6em", "0.86em"]}
					mb="0.5rem"
					textShadow="1px 1px 1px #000"
				>
					ARTISAN SINCE 1991
				</Text>
				<Heading
					fontSize={["40px", "58px", "70px"]}
					color="#fff"
					lineHeight={["50px", "60px", "70px", "85px"]}
					mb="50px"
					sx={{wordSpacing: "350px"}}
				>
					Traditional Italian Pizza
				</Heading>
				
				<Link
					d="inline-flex"
					alignItems="center"
					justifyContent="center"
					verticalAlign="middle"
					h="3rem"
					w="200px"
					fontSize="1rem"
					p="0 1rem"
					bg="#e7272d"
					color="#fff"
					borderRadius="0.375rem"
					fontWeight="bold"
					_hover={{backgroundColor: "#fff", color: "#e7272d"}}
					_focus={{backgroundColor: "#fff", color: "#e7272d"}}
					as={ReachLink}
					to="/show">
					<SearchIcon mr="10px"/> Show Menu
				</Link>
			</Flex>
		
		</Flex>
	
	);
};

export default Home;
