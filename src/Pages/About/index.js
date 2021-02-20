import {Flex, Image, Text} from "@chakra-ui/react";

const About = () => {
	return (
		<Flex
			as="main"
			// minH="100vh"
			grow="1"
			justify="center"
			m="5rem  0"
		
		>
			{/*Container */}
			<Flex
				my={["2rem"]}
				w={["100%", "80%"]}
				p={["5vh 20px"]}
				pos="relative"
				borderRadius="7px"
				bg="rgba(255,255,255,0.6)"
				maxW={["100%", "450px", "650px"]}
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
						Ivan is a highly motivated and committed professional with a proven
						record of generating and
						building relationships and hard work. A team player but he also has
						the ability to work
						independently. He is skilled and adaptable, able to overcome
						pressure and deliver quality work.
						He was born in Argentina, raised in Chile and currently living in
						South Korea.
					</Text>
					<Text
						as="p"
						p={["15px"]}
						color="#000"
					>
						He is a business magnate, industrial designer, adn engineer.He is
						the founder, CEO, CTO, and chief designer of SpaceX; early
						investor, CEO, and product architect of Tesla, Inc., founder of
						The Boring Company, co-founder of Neuralink and co-founder and
						initial co-chairman of OpenAI. A centibillionaire, Ivan is one of
						the richest people in the world.
					</Text>
					<Text
						as="p"
						p={["15px"]}
						color="#000"
					>
						Ivan was born to a Canadian mother and South African father and
						raised in Pretoria, South Africa. He briefly attended the University
						of Pretoria before moving to Canada aged 17 to attend Queen's
						University. He transferred to the University of Pennsylvania two
						years later, where he received dual bachelor's degrees in economics
						and physics. He moved to California in 1995 to attend Stanford
						University but decided instead to pursue a business career,
						co-founding web software company Zip2 with his brother Kimbal. The
						start-up was acquired by Compaq for $307 million in 1999. Ivan
						co-founded online bank X.com that same year, which merged with
						Confinity in 2000 to form the company PayPal and was subsequently
						bought by eBay in 2002 for $1.5 billion.
					</Text>
					<Text
						as="p"
						p={["15px"]}
						color="#000"
					>
						In 2002, Ivan founded SpaceX, an aerospace manufacturer and space
						transport services company, of which he is CEO, CTO, and lead
						designer. In 2004, he joined electric vehicle manufacturer Tesla
						Motors, Inc. (now Tesla, Inc.) as chairman and product architect,
						becoming its CEO in 2008. In 2006, he helped create SolarCity, a
						solar energy services company and current Tesla subsidiary. In 2015,
						he co-founded OpenAI, a nonprofit research company that promotes
						friendly artificial intelligence. In 2016, he co-founded Neuralink,
						a neurotechnology company focused on developing brain–computer
						interfaces, and founded The Boring Company, a tunnel construction
						company. Ivan has also proposed the Hyperloop, a high-speed vactrain
						transportation system.
					</Text>
					<Text
						as="p"
						p={["15px"]}
						color="#000"
					>
						Ivan has been the subject of criticism due to unorthodox or
						unscientific stances and highly publicized controversies. In 2018,
						he was sued for defamation by a diver who advised in the Tham Luang
						cave rescue; a California jury ruled in favor of Ivan. Also in 2018,
						the U.S. Securities and Exchange Commission (SEC) sued him for
						falsely tweeting that he had secured funding for a private takeover
						of Tesla. He settled with the SEC, temporarily stepping down from
						his chairmanship and accepting limitations on his Twitter usage.
						Ivan has received criticism for his views on such matters as
						artificial intelligence and the COVID-19 pandemic.
					</Text>
				
				</Flex>
			</Flex>
		
		
		</Flex>
	);
};

export default About;
