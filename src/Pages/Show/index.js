import React from "react";
import {
	Badge,
	Box,
	Flex,
	Grid,
	Image,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useFetch from "../../Hooks/useFetch";
import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";
//https://ivan-pizza.herokuapp.com/pizzas

const Show = () => {
	const {data: pizzas, isPending} = useFetch(
		`https://ivan-pizza.herokuapp.com/pizzas`
	);
	
	
	return (
		<Flex
			as="main"
			minH="100vh"
			justify="center"
			m="2rem  0"
		
		>
			{/*<Text as='h1' fontSize='4xl' textAlign='center' mt='2rem'>*/}
			{/*	This are all of master Ivan's pizzas*/}
			{/*</Text>*/}
			
			
			
			
			<Flex
				w="100%"
				justify="center"
				align="center"
				direction="column"
				className="container"
			>
				<Text
					textAlign="center"
					color="#fff"
					fontSize="3xl"
				>Here are all the pizzas master Ivan created
				</Text>

					{isPending ? (
						<Flex justifyContent='center' alignItems='center' h='500px'>
							<Spinner
								thickness='4px'
								speed='0.65s'
								emptyColor='gray.200'
								color='blue.500'
								size='xl'
							/>
						</Flex>
					) : (
						<SimpleGrid
							minChildWidth={[320, 260]}
							gap={6}
							key={uuid()}
							m='3rem'
						>
							{pizzas &&
							pizzas.map((pizza) => (
								<Box
									bg="#1a202b"
									borderWidth='1px'
									borderRadius='lg'
									overflow='hidden'
									key={uuid()}
								>
									<Link to={`/show/${pizza.id}`} >
										{pizza.img !== ""
											?
											<Image
												h="250px"
												src={`${pizza.img}`}
												alt={pizza.name}/>
											:
											<Image
												// fit="fill"
												// h="250px"
												w="full"
												h={56}
												objectFit="cover"
												objectPosition="center"
												src={`${require("../../Img/no-image-resized.png").default}`}
												alt={pizza.name}/>
										}
										<Flex
											direction="column"
											align="center"
											>
											<Flex
												// direction="column-reverse"
												bg="#171922"
												w="100%"
												py='10px'
												justify="center"
												align="center"
											>
												{pizza.canBeDeleted && <Badge
													borderRadius='full'
													p='1px 20px'
													mx='12px'
													colorScheme='teal'
												>New
												</Badge>}
												
												<Flex
													grow="1"
												direction="column"
												>
												<Text
													as="h3"
													fontSize="1.2em"
													fontWeight="bold"
													color="#fff"
													textAlign="center"
												>
												{pizza.name} {pizza.id}
												</Text>
													<Text
														textAlign="center"
														color="#fff"
														fontStyle="italic"
														as="p">
														{pizza.origin}
													</Text>
												</Flex>
											</Flex>
											
											<Flex
												direction="column"
												justify="space-around"
												h="200px"
											>
											<Text
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
														<Badge px='2' colorScheme='red'>
															{ingredient}
														</Badge>
													</Flex>
												))}
											</Flex>
											</Flex>
										</Flex>
									</Link>
								</Box>
							))}
						</SimpleGrid>
						
					)}
			</Flex>
		</Flex>
	);
};

export default Show;
