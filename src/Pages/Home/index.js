import React               from "react";
import {Link as ReachLink} from "react-router-dom";
import {Flex, Link}        from "@chakra-ui/react";
import CreatePizzas        from "./CreatePizzas";
import ShowPizzas          from "./ShowPizzas";


const index = () => {
	return (
		
		<Flex
			height="82vh"
			justifyContent="space-around"
			alignItems="center"
			direction={["column", "column", "column", "row"]}
		>

			<Link as={ReachLink} to="/show"
			      // minW="300px"
			      // w="35vw"
			      // height="60%"
			      // alignItems="center"
			      // justifyContent="center"
			      // m="20px auto"
			      // bg="#fff"
			      // _hover={{backgroundColor: "#e7272d", color: "#fff"}}
			      // shadow="20px 20px 60px #bebebe"
			>
				<Flex alignItems="center"
				      justifyContent="center"
				      height="100%"
				>
					<ShowPizzas/>
				</Flex>
			</Link>
		</Flex>
	
	);
};

export default index;
