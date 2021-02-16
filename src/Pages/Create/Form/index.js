import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "../../../Validation";
import options from "../Options";
import MultiSelect from "react-multi-select-component";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Heading,
	Image,
	Input,
	Textarea
} from "@chakra-ui/react";

export const Create = () => {
	const [previewSource, setPreviewSource] = useState("");
	const history = useHistory()
	//React form
	const {handleSubmit, errors, register, formState, control} = useForm({
		resolver: yupResolver(schema),
		mode: "all"
	});
	//Handle file
	const handleInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
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
		
		history.push("/")
	}
	
	
	return (
		
		<Flex h="82vh" m="auto" direction="column" justify="center" align="center"
		      color="#fff">
			<Heading as="h1" size="3xl">Create your own pizza</Heading>
			<Box w="40%">
				<form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
					<FormControl isInvalid={errors.name} color="#fff" my="15px">
						<Input
							name="name"
							placeholder="Name"
							ref={register}
						/>
						<FormErrorMessage>
							{errors.name?.message}
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.origin} color="#fff" my="15px">
						<Input
							name="origin"
							placeholder="Origin"
							ref={register}
						/>
						<FormErrorMessage>
							{errors.origin?.message}
						</FormErrorMessage>
					</FormControl>
					
					
					<FormControl isInvalid={errors.img} color="#fff" my="15px">
						<Input
							type="file"
							name="img"
							placeholder="Image"
							onChange={handleInputChange}
							ref={register}
						/>
						{previewSource && (<Image
							boxSize="150px"
							src={previewSource}
							alt="Segun Adebayo"
						/>)}
						<FormErrorMessage>
							{errors.img?.message}
						</FormErrorMessage>
					</FormControl>
					
					
					<FormControl isInvalid={errors.ingredients} my="15px "
					             style={{color: "#000"}}>
						<Controller
							rules={{required: "This is required ofc"}}
							control={control}
							name="ingredients"
							defaultValue={[]}
							render={({onChange, value}) => {
								
								return (
									<MultiSelect
										options={options}
										value={value}
										onChange={onChange}
										labelledBy={"Select"}
									/>
								);
							}}
						/>
						
						<FormErrorMessage>
							{errors.ingredients?.message}
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.description} color="#fff" my="15px">
						<Textarea placeholder="Add a beautiful description for your pizza"
						          name="description" ref={register}/>
						<FormErrorMessage>
							{errors.description?.message}
						</FormErrorMessage>
					</FormControl>
					
					<Button mt={4} w="full" colorScheme="teal"
					        isLoading={formState.isSubmitting}
					        type="submit">Submit</Button>
				</form>
			
			</Box>
		
		</Flex>
	
	);
};

