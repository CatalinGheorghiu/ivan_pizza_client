import React from "react";
import {Link as ReachLink} from "react-router-dom";
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	Image,
	Link,
	useDisclosure
} from "@chakra-ui/react";
import {AddIcon, CloseIcon, HamburgerIcon} from "@chakra-ui/icons";


const Header = (props) => {
	const {isOpen, onOpen, onClose} = useDisclosure();
	
	const handleClick = () => {
		onOpen();
	};
	
	const close = () => {
		onClose();
	};
	
	
	return (
		// Navbar
		<Flex
			as="header"
			align="center"
			justify="space-between"
			w="100%"
			mb={["2rem","1rem"]}
			{...props}
		>
			{/*Mobile*/}
			<Flex
				as="nav"
				display={{base: "block", md: "none"}}
				h="100px"
				w="100%"
				align="center"
			>
				<Flex
					w="100%"
					justify="space-between"
				>
				{/* Hamburger icon*/}
				<IconButton
					onClick={handleClick}
					bg="transparent"
					aria-label="Show menu"
					_focus={{color: "#e7272d"}}
					_hover={{color: "#e7272d"}}
					m="25px 0 0 25px"
					fontSize="3xl"
					color="#fff"
					icon={<HamburgerIcon/>}
				/>
				
				<Image
					src={`${require("../../Img/ivan's_pizza.png").default}`}
					boxSize="100px"
					m="15px 25px 0 0"
				/>
				</Flex>
				<Drawer
					placement="top"
					onClose={onClose}
					isOpen={isOpen}>
					<DrawerOverlay>
						<DrawerContent
							bg="#222">
							<DrawerHeader>
								{/* Header buttons container*/}
								<Flex
									justify="space-between"
								>
									{/* Close button*/}
									<IconButton
										onClick={close}
										color="#fff"
										bg="none"
										_focus={{color: "#e7272d"}}
										_hover={{color: "#e7272d"}}
										aria-label="Hide menu"
										m="25px 0 0 10px "
										fontSize="3xl"
										icon={<CloseIcon/>}
									/>
									{/* Add pizza button*/}
									<Link
										onClick={close}
										m="25px 0 0 10px"
										d="inline-flex"
										alignItems="center"
										justifyContent="center"
										verticalAlign="middle"
										h="2.5rem"
										fontSize="1rem"
										p="0 1rem"
										bg="#fff"
										borderRadius="0.375rem"
										fontWeight="bold"
										_hover={{color: "#e7272d"}}
										_focus={{color: "#e7272d"}}
										as={ReachLink}
										to="/create">
										<AddIcon mr="10px"/> Add A Pizza
									</Link>
								</Flex>
							</DrawerHeader>
							<DrawerBody>
								
								{/* Links container*/}
								{isOpen &&
								<Flex
									direction="column"
									fontWeight="bold"
									fontSize="2xl"
									color="#fff">
									{/* Home page link*/}
									<Link
										onClick={close}
										as={ReachLink}
										to="/"
										m="10px 20px"
										_hover={{color: "#e7272d"}}
										_focus={{color: "#e7272d"}}> Home
									</Link>
									
									{/*About page link*/}
									<Link
										onClick={close}
										as={ReachLink}
										to="/about"
										m="10px 20px"
										_hover={{color: "#e7272d"}}
										_focus={{color: "#e7272d"}}>About Ivan
									</Link>
									
									{/*Contact page link*/}
									<Link
										onClick={close}
										as={ReachLink}
										to="/contact"
										m="10px 20px"
										_hover={{color: "#e7272d"}}
										_focus={{color: "#e7272d"}}>Contact
									</Link>
								</Flex>
								}
							</DrawerBody>
						</DrawerContent>
					</DrawerOverlay>
				</Drawer>
			</Flex>
			
			{/*Desktop*/}
			<Flex
				as="nav"
				display={{base: "none", md: "block"}}
				w="100%"
			>
				{/* Main container*/}
				<Flex
					m={[null, null, "70px 70px 0 40px", "70px 130px 0 100px"]}
					justify="space-between"
					align="center"
				>
				
					{/* Left side container*/}
					<Flex
						align="center"
						ml="30px"
						fontWeight="bold"
						fontSize={[null, null, "md", "xl"]}
						color="#fff"
					>
						
						{/* Logo*/}
						<Image
							src={`${require("../../Img/ivan's_pizza.png").default}`}
							boxSize="100px"
						/>
						
						{/* Home page link*/}
						<Link
							onClick={close}
							as={ReachLink}
							to="/"
							m="10px 25px"
							_hover={{color: "#e7272d"}}
							_focus={{borderBottom: "1px solid #e7272d",color: "#e7272d"}}> Home
						</Link>
						
						{/*About page link*/}
						<Link
							onClick={close}
							as={ReachLink}
							to="/about"
							m="10px 25px"
							_hover={{color: "#e7272d"}}
							_focus={{borderBottom: "1px solid #e7272d",color: "#e7272d"}}>About Ivan
						</Link>
						
						{/*Contact page link*/}
						<Link
							onClick={close}
							as={ReachLink}
							to="/contact"
							m="10px 25px"
							_hover={{color: "#e7272d"}}
							_focus={{borderBottom: "1px solid #e7272d",color: "#e7272d"}}>Contact
						</Link>
					</Flex>
					
					{/* Add pizza link*/}
					<Link
						d="inline-flex"
						alignItems="center"
						justifyContent="center"
						verticalAlign="middle"
						h="2.5rem"
						fontSize="1rem"
						p="0 1rem"
						bg="#fff"
						borderRadius="0.375rem"
						fontWeight="bold"
						_hover={{color: "#e7272d"}}
						_focus={{outline: "none",color: "#e7272d"}}
						as={ReachLink}
						to="/create">
						<AddIcon mr="10px"/> Add A Pizza
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
