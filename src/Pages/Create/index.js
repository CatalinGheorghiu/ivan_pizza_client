import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Flex, Text, Image} from "@chakra-ui/react";
import Form from "../../Common/Form";

const Create = () => {
	const [previewSource, setPreviewSource] = useState("");
	const history = useHistory();
	
	//Handle file
	const handleInputChange = (e) => {
		if (e.target.files.length === 1) {
			const file = e.target.files[0];
			previewFile(file);
		}
	};
	//Get the url
	const previewFile = (file) => {
		const reader = new FileReader();
		//Convert url to string
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	
	// https://ivan-pizza.herokuapp.com
	const uploadData = async (data) => {
		try {
			await fetch("https://ivan-pizza.herokuapp.com/pizzas", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {"Content-type": "application/json"}
			});
		} catch (error) {
			console.log(error);
		}
	};
	
	function onSubmit(values) {
		const newValues = {...values};
		newValues.img = previewSource;
		newValues.ingredients = values.ingredients.map(ingredient => ingredient.value);
		uploadData(newValues);
		//Redirect
		history.push("/show");
	}
	
	return (
		<Flex
			as="main"
			grow="1"
			justify="center"
			m="5rem  0"
			>
			<Flex
				direction="column"
				bg="rgba(0,0,0,0.5)"
				borderRadius="7px"
				p="1rem"
				minW="320px"
				maxW={["80%","50%","450px"]}
				border="0.1px solid #fff"
			>
			<Text
				color="#fff"
				fontWeight="bold"
				textAlign="center"
				mb="20px"
				fontSize="1.5em"
			>
				Create your own pizza
			</Text>
			
			<Form
				onSubmit={onSubmit}
				handleInputChange={handleInputChange}
				previewSource={previewSource}
			/>
		</Flex>
		</Flex>
	);
};

export default Create;



