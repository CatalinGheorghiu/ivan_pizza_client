import React               from "react";
import {Link as ReachLink} from "react-router-dom";
import {Flex, Image, Link} from "@chakra-ui/react";

const index = () => {
	return (
		<header>
			<Flex
				height="10vh"
				backgroundColor="#222222"
				justifyContent="space-between"
				alignItems="center"
			>
				<Image height="75px" width="75px"
				       src={require("../../Img/ivan's_pizza.png").default}
				       alt="Ivan's Pizza Logo" mx="20px"/>
				<Flex alignItems="center" justifyContent="space-between" color="#fff"
				      fontWeight="bold" mx="20px">
					<Link as={ReachLink} to="/" m="10px 20px" _hover={{color: "#e7272d"}}
					      _focus={{border: "none"}}>Home</Link>
					<Link as={ReachLink} to="/about" m="10px 20px"
					      _hover={{color: "#e7272d"}} _focus={{border: "none"}}>About
						Ivan</Link>
					<Link as={ReachLink} to="/contact" m="10px 20px"
					      _hover={{color: "#e7272d"}}
					      _focus={{border: "none"}}>Contact</Link>
				</Flex>
			</Flex>
		</header>
	);
};

export default index;
