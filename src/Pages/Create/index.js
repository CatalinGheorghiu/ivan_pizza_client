import React from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "./Schema";
import options from "./Options";
import MultiSelect from "react-multi-select-component";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Heading,
	Input,
	Textarea
} from "@chakra-ui/react";

const Create = () => {
	
	
	const {handleSubmit, errors, register, formState, control} = useForm({
		resolver: yupResolver(schema),
		mode:"all"
	});
	
	
	function onSubmit(values) {
		console.log(values);
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
							ref={register}
						/>
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

export default Create;
