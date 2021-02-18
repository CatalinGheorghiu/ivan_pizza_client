import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "../../Validation/index";
import {Box, Button} from "@chakra-ui/react";
import FormInput from "../FormInput";
import FormTextarea from "../FormTextarea";
import FormMultiselect from "../FormMultiselect";


const Form = ({onSubmit, handleInputChange, value}) => {
	
	//React form
	const {handleSubmit, errors, register, formState, control} = useForm({
		resolver: yupResolver(schema),
		mode: "all"
	});
	
	return (
		
		<Box>
			<form onSubmit={handleSubmit(onSubmit)} >
				
				<FormInput name="name" id="name" placeholder="Name" register={register}
				           error={errors.name}
				           defaultValue={value ? value.name : ""}/>
				
				<FormInput name="origin" id="origin" placeholder="Origin"
				           register={register} error={errors.origin}
				           defaultValue={value ? value.origin : ""}/>
				
				<FormInput name="img" id="img" placeholder="Image" type="file"
				           onChange={handleInputChange} register={register}
				           error={errors.img}/>
				
				<FormMultiselect name="ingredients" error={errors.ingredients}
				                 control={control}
				                 defaultValue={value ? value.ingredients : []}/>
				
				<FormTextarea name="description"
				              placeholder="Add a beautiful description for your pizza"
				              register={register} error={errors.description}
				              defaultValue={value ? value.description : ""}/>
				
				<Button mt={4} w="full" colorScheme="teal"
				        isLoading={formState.isSubmitting}
				        type="submit">Submit</Button>
			</form>
		</Box>
	
	);
};

export default Form;