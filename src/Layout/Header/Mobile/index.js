import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	Link,
	useDisclosure
} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Link as ReachLink} from "react-router-dom";

const Mobile = () => {
	const [size, setSize] = React.useState("md");
	const {isOpen, onOpen, onClose} = useDisclosure();
	
	const handleClick = () => {
		// setSize(newSize);
		onOpen();
		
	};
	
	const close = () => {
		onClose();
	};

	
	return (
		<>
			<IconButton
				onClick={ handleClick}
				colorScheme="blue"
				aria-label="Search database"
				key={size}
				m={4}
				icon={<HamburgerIcon/>}
			/>
			<Drawer placement="top" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay>
					<DrawerContent
						bg="#222">
						<DrawerHeader>
							<IconButton
								onClick={close}
								color="#fff"
								bg="none"
								_focus={{outline: "none"}}
								_hover={{color: "#e7272d"}}
								aria-label="Search database"
								key={size}
								m="20px 0 0 10px "
								fontSize="3xl"
								icon={<CloseIcon/>}
							/>
						</DrawerHeader>
						<DrawerBody>
							{isOpen &&
							<Flex
								direction="column">
								<Flex>
									<Flex
										direction="column"
										fontWeight="bold"
										fontSize="3xl"
										color="#fff">
										<Link
											onClick={close}
											as={ReachLink}
											to="/"
											m="10px 20px"
											
											_hover={{color: "#e7272d"}}
											_focus={{border: "none"}}> Home
										</Link>
										
										{/*About page ling*/}
										<Link
											onClick={close}
											as={ReachLink}
											to="/about"
											m="10px 20px"
											_hover={{color: "#e7272d"}}
											_focus={{border: "none"}}>About Ivan
										</Link>
										
										{/*Contact page link*/}
										<Link
											onClick={close}
											as={ReachLink}
											to="/contact"
											m="10px 20px"
											_hover={{color: "#e7272d"}}
											_focus={{border: "none"}}>Contact
										</Link>
									</Flex>
								
								</Flex>
							
							</Flex>
							}
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Mobile;
