import React from "react";
import {Link as ReachLink, useHistory, useParams} from "react-router-dom";
import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import useFetch from "../../../Hooks/useFetch";

const PizzaDetails = () => {
	const {id} = useParams();
	const history = useHistory();
	const {
		data: pizza,
		isPending
	} = useFetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`);
	
	const handleClick = (e) => {
		fetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`, {
			method: "DELETE"
		}).then(() => history.push("/show"));
		
	};
	
	return (
		<section>
			<Flex
				height="82vh"
				justifyContent="space-around"
				alignItems="center"
				bg={`#4FB69F url(${require("../../../Img/bg2.jpg").default}) no-repeat right top`}
				color="#fff"
				direction={["column", "column", "column", "row"]}
			>
				{pizza &&
				<Box>
					<Text as="h1" fontSize="3xl">{pizza.name} {pizza.id}</Text>
					
					<DeleteIcon onClick={handleClick}/>
					<Link as={ReachLink} to={`/edit/${pizza.id}`}>
						<EditIcon/>
					</Link>
				</Box>
				}
			</Flex>
		</section>
	);
};

export default PizzaDetails;
