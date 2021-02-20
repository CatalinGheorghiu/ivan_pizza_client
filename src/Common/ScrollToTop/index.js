import React, {useEffect, useState} from "react";
import {Button} from "@chakra-ui/react";
import {ArrowUpIcon} from "@chakra-ui/icons";

const ScrollToTop = ({showBellow}) => {
	
	const [show, setShow] = useState(!showBellow);
	
	const handleScroll = () => {
		if (window.pageYOffset > showBellow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
			
		}
	};
	
	useEffect(() => {
		if (showBellow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener(`scroll`, handleScroll);
		}
	});
	
	
	const handleClick = () => {
		window[`scrollTo`]({top: 0, behavior: `smooth`});
	};
	
	return (
		<>
			{show &&
			<Button
				zIndex="2"
				pos="fixed"
				bottom="2vh"
				bg="#dcdcdc"
				color="#000"
				_hover={{
					transition: "0.3s",
					color: "#e7272d",
					backgroundColor: "#dcdcdc"
				}}
				_focus={{
					transition: "0.3s",
					color: "#e7272d",
					backgroundColor: "#dcdcdc"
				}}
				right="5%"
				borderRadius="50%"
				h="40px"
				w="40px"
				onClick={handleClick}>
				<ArrowUpIcon/>
			</Button>
			}
		</>
	);
};

export default ScrollToTop;
