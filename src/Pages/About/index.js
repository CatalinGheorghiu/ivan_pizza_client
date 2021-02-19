import {Flex, Image, Text} from "@chakra-ui/react";

const About = () => {
	return (
		<Flex
			as="main"
			minH="100vh"
			justify="center"
			m="5rem  0"
		
		>
			{/*Container */}
			<Flex
				w={["100%", "80%"]}
				p={["5vh 20px"]}
				pos="relative"
				borderRadius="7px"
				bg="rgba(255,255,255,0.4)"
			>
				<Image
					pos="absolute"
					top="-50px"
					right="0"
					left="0"
					m="0 auto"
					src="https://res.cloudinary.com/catalin/image/upload/v1613121691/dev_setup/l8kapry9bolr5h5myztc.jpg"
					borderRadius="full"
					boxSize={["100px"]}
				/>
				<Flex
					w="full"
					direction="column"
					align="center"
					mt="2rem"
				>
					<Text
						as="h1"
						textAlign="center"
						fontSize={["1.4em"]}
						fontWeight="700"
						color="#fff"
					>
						About the
						<Text
							as="span"
							fontStyle="italic"
							color="#e7272d"
							p="0 10px"> MASTER
						</Text> behind the scenes
					</Text>
					<Text
						as="h2"
						m="10px 0"
						fontWeight="700"
						fontStyle="italic"
					>
						Ivan Maximiliano Saldano
					</Text>
					<Text
						as="p"
						p={["15px"]}
						color="#000"
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
						eaque exercitationem necessitatibus, quae saepe sequi sit. Alias
						aperiam dolores libero mollitia officiis sequi soluta. Adipisci
						aliquid, aspernatur at cupiditate delectus dicta doloremque dolores
						est, fuga id impedit, labore libero nihil nostrum praesentium qui
						reiciendis voluptatum? Animi asperiores aspernatur beatae cum
						debitis distinctio ducimus eaque eligendi, enim eos eum eveniet
						expedita, fuga labore laboriosam nam natus neque nesciunt optio qui,
						quisquam quod unde! Autem dignissimos est facere iste libero natus
						quis reprehenderit tempore? Architecto culpa dolorem libero non
						praesentium. Accusantium aliquam at autem culpa debitis deleniti
						deserunt dignissimos dolorum error et eum exercitationem facilis
						fugit id iusto laborum libero magni maiores minima nam neque nisi
						nobis non numquam odio perferendis perspiciatis provident quam quas
						quod, quos sint soluta tempora totam ut vitae voluptates? Architecto
						assumenda earum illo illum incidunt ipsa laudantium, molestias
						pariatur porro provident ratione, repellendus rerum ullam, velit.
					</Text>
				</Flex>
			</Flex>
		
		
		</Flex>
	);
};

export default About;
