import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Flex, Heading, Image} from "@chakra-ui/react";
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
		
		history.push("/");
	}
	
	return (
		<Flex h="82vh" m="auto" direction="column" justify="center" align="center"
		      color="#fff">
			<Heading mb="50px" letterSpacing="8px">Create your own pizza </Heading>
			
			<Form onSubmit={onSubmit} handleInputChange={handleInputChange}
			      previewSource={previewSource}/>
			{previewSource && <Image
				boxSize="200px"
				src={previewSource}
				alt="pizza image"
			/>}
		</Flex>
	);
};

export default Create;



