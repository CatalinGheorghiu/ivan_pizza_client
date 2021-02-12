import {Flex, Image, Text} from "@chakra-ui/react";

const About = () => {
	return (
		<section>
			<Flex
				height="82vh"
				justifyContent="space-around"
				// alignItems="center"
				bg={`#4FB69F url(${require("../../Img/bg2.jpg").default}) no-repeat right top`}
				color="#fff"
				direction={["column", "column", "column", "row"]}
			>
				<Flex direction="column" justify="center" align="center">
					<Image
						src="https://res.cloudinary.com/catalin/image/upload/v1613121691/dev_setup/l8kapry9bolr5h5myztc.jpg"
						borderRadius="full"
						boxSize="300px"
						mt="20"
						/>
					<Text as="h1" fontSize="3xl" m="auto">Ivan can be a nice person...
						sometimes</Text>
				</Flex>
			</Flex>
		</section>
	);
};

export default About;
