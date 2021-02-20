import React from "react";
import {v4 as uuid} from "uuid";
import {Link as ReachLink, useHistory, useParams} from "react-router-dom";
import {Badge, Button, Divider, Flex, Image, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

import useFetch from "../../../Hooks/useFetch";

const PizzaDetails = () => {
	const {id} = useParams();
	const history = useHistory();
	const {data: pizza} = useFetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`);
	//https://ivan-pizza.herokuapp.com
	
	
	const handleClick = () => {
		fetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`, {
			method: "DELETE"
		}).then(() => {
			history.push("/show");
		});
	};
	
	return (
		
		// Main container
		<Flex
			as="main"
			minH="100vh"
			justify="center"
			m="2rem  0"
			color="#fff"
			
		>
			{pizza &&
			<Flex
				pos="relative"
				direction="column"
				bg="#1a202b"
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				m="4rem 2rem"
				minW="280px"
				maxW={["443px", "550px", "650px"]}
				key={uuid()}
			>
				{pizza.canBeDeleted &&
				<Flex
					pos="absolute"
					zIndex="999"
					right="-2%"
					top="52px"
					direction="column"
					justify="space-between"
					// h="120px"
				>
					<Button
						bg="#e7272d"
						_hover={{
							color: "#fff"
						}}
					>
						<DeleteIcon
							color="#fff"
							onClick={handleClick}
						/>
					</Button>
					
					<Button
						bg="rebeccapurple"
						_hover={{
							color: "rebeccapurple"
						}}
						as={ReachLink}
						to={`/edit/${pizza.id}`}
					>
						<EditIcon
							color="#fff"
						/>
					</Button>
				</Flex>
				}
				
				<Flex
					direction="column"
					p={["2rem"]}
				>
					<Text
						as="h3"
						fontSize={["1.2em", "1.6em"]}
						fontWeight="bold"
						color="#fff"
						textAlign="center"
					>
						{pizza.name} {pizza.id}
					</Text>
					<Text
						mt="1rem"
						textAlign="center"
						color="#fff"
						fontStyle="italic"
						as="p">
						{pizza.origin}
					</Text>
				</Flex>
				
				<Flex
					pos="relative"
					justify="center"
					align="center"
					mb={["2rem"]}
				
				>
					{pizza.img !== ""
						?
						<Image
							w={["full", "90%"]}
							// h="250px"
							src={`${pizza.img}`}
							alt={pizza.name}/>
						:
						<Image
							h={56}
							objectFit="cover"
							objectPosition="center"
							src={`${require("../../../Img/no-image-resized.png").default}`}
							alt={pizza.name}/>
					}
					
					{pizza.canBeDeleted &&
					<Badge
						position="absolute"
						left={["0", "20px"]}
						top="-10px"
						borderRadius='full'
						p='3px 20px'
						mx='12px'
						colorScheme='teal'
					>New
					</Badge>}
				</Flex>
				<Flex
					direction="column"
					align="center"
				>
					<Flex
						direction="column"
						justify="center"
						align="center"
						w={["80%", "90%"]}
					>
						<Text>
							{pizza.description}
						</Text>
					</Flex>
					
					<Flex
						direction="column"
						justify="space-around"
						align="center"
						m="2rem 0 4rem 0"
					>
						<Divider
							w={["80%", "90%", "100%"]}
							mb="2rem"
						/>
						
						<Text
							mb="2rem"
							as='h3'
							fontSize='xl'
							textAlign='center'
							color="#fff"
						>
							Ingredients
						</Text>
						<Flex
							color='gray.500'
							fontWeight='semibold'
							letterSpacing='wide'
							fontSize='xs'
							textTransform='uppercase'
							ml='2'
							flexWrap='wrap'
							justify="center"
							key={uuid()}
						>
							{pizza.ingredients.map((ingredient) => (
								<Flex
									m='2'
									key={uuid()}
								>
									<Badge
										px='2'
										colorScheme='red'
									>
										{ingredient}
									</Badge>
								</Flex>
							))}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			}
		</Flex>
	);
}
;

export default PizzaDetails;
