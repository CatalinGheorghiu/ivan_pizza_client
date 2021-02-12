import React        from "react";
import {useParams}  from "react-router-dom";
import {Flex, Text} from "@chakra-ui/react";

const PizzaDetails = () => {
	const {id} = useParams();
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
				<Text as="h1" fontSize="3xl">This is pizza with the id {id}</Text>
			</Flex>
		</section>
	);
};

export default PizzaDetails;
