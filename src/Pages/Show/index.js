import React from "react";
import {
	Badge,
	Box,
	Flex,
	Image,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useFetch from "../../Hooks/useFetch";
import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";

const Show = () => {
	const {data: pizzas, isPending} = useFetch(
		`https://ivan-pizza.herokuapp.com/pizzas`
	);
	// const {data: pizzas, isPending} = useFetch(
	// 	`/pizzas`
	// );
	
	return (
		<Box color='#fff'>
			<Text as='h1' fontSize='4xl' textAlign='center' mt='2rem'>
				This are all of master Ivan's pizzas
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
							borderWidth='1px'
							borderRadius='lg'
							overflow='hidden'
							key={uuid()}
						>
							<Link to={`/show/${pizza.id}`}>
								{pizza.img !== "" ?
									<Image src={`${pizza.img}`} alt={pizza.name}/> :
									<Image
										src={`${require("../../Img/no-image-resized.png").default}`}
										alt={pizza.name}/>
								}
								<Box p='6'>
									<Box
										mt='1'
										fontWeight='semibold'
										as='h4'
										lineHeight='tight'
										isTruncated
									>
										<Badge
											borderRadius='full'
											px='2'
											mr='4'
											colorScheme='teal'
										>
											New
										</Badge>
										{pizza.name} {pizza.id}
									</Box>
									
									<Box align='center'>
										<Text as='i'>{pizza.origin}</Text>
										<Box
											as='span'
											color='gray.600'
											fontSize='sm'
										/>
									</Box>
									
									<Text
										as='h1'
										fontSize='xl'
										textAlign='center'
										my='2rem'
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
										key={uuid()}
									>
										{pizza.ingredients.map((ingredient) => (
											<Box m='2' key={uuid()}>
												<Badge px='2' colorScheme='red'>
													{ingredient}
												</Badge>
											</Box>
										))}
									</Flex>
								</Box>
							</Link>
						</Box>
					))}
				</SimpleGrid>
			)}
		</Box>
	);
};

export default Show;
