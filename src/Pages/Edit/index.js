import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Form from "../../Common/Form";
import {Flex, Text} from "@chakra-ui/react";
import useFetch from "../../Hooks/useFetch";
import options from "../../Assets/Options";

const Edit = () => {
	const history = useHistory();
	const {id} = useParams();
	const {data: pizza} = useFetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`);
	const [previewSource, setPreviewSource] = useState("");
	
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
	
	
	const ingredients = options.filter(ing => pizza?.ingredients.includes(ing.value));
	const newPizza = {...pizza};
	newPizza.ingredients = ingredients;
	
	const onSubmit = async (values) => {
		const newValues = {...values};
		previewSource ? newValues.img = previewSource : newValues.img = pizza.img;
		newValues.ingredients = values.ingredients.map(ingredient => ingredient.value);
		
		//https://ivan-pizza.herokuapp.com
		try {
			await fetch(`https://ivan-pizza.herokuapp.com/pizzas/${id}`, {
				method: "PATCH",
				body: JSON.stringify(newValues),
				headers: {"Content-type": "application/json"}
			});
			//Redirect
			history.push("/show");
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<Flex
			as="main"
			grow="1"
			justify="center"
			m="5rem 0"
		>
			{pizza &&
			<Flex
				direction="column"
				bg="rgba(0,0,0,0.5)"
				borderRadius="7px"
				p="1rem"
				maxH="550px"
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
					Edit {pizza.name}
				</Text>
				<Form
					onSubmit={onSubmit}
					value={newPizza}
					handleInputChange={handleInputChange}
					previewSource={previewSource}/>
			</Flex>
			}
		</Flex>
	);
};

export default Edit;
