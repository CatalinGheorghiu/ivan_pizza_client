import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "../../Validation/index";
import {Button, Image} from "@chakra-ui/react";
import FormInput from "../FormInput";
import FormTextarea from "../FormTextarea";
import FormMultiselect from "../FormMultiselect";


const Form = ({onSubmit, handleInputChange, value,previewSource}) => {
	
	//React form
	const {handleSubmit, errors, register, formState, control} = useForm({
		resolver: yupResolver(schema),
		mode: "all"
	});
	
	return (
		
		
		<form
			onSubmit={handleSubmit(onSubmit)}
		>
			
			<FormInput
				name="name"
				id="name"
				placeholder="Name"
				register={register}
				error={errors.name}
				defaultValue={value ? value.name : ""}
			/>
			
			<FormInput
				name="origin"
				id="origin"
				placeholder="Origin"
				register={register}
				error={errors.origin}
				defaultValue={value ? value.origin : ""}
			/>
			
			<FormInput
				name="img"
				id="img"
				placeholder="Image"
				type="file"
				onChange={handleInputChange}
				register={register}
				error={errors.img}
			/>
			
			{previewSource &&
			<Image
				w={["222px"]}
				src={previewSource}
				alt="pizza image"
			/>}
			
			<FormMultiselect
				name="ingredients"
				error={errors.ingredients}
				control={control}
				defaultValue={value ? value.ingredients : []}
			/>
			
			<FormTextarea
				color="#fff"
				name="description"
				placeholder="Add a beautiful description for your pizza"
				register={register}
				error={errors.description}
				defaultValue={value ? value.description : ""}
			/>
			
			<Button
				className="submitBtn"
				mb="20px"
				w="full"
				_hover={{backgroundColor: "#fff", color: "#e7272d"}}
				_focus={{backgroundColor: "#fff", color: "#e7272d"}}
				sx={{
					bg: "#e7272d",
				}}
				color="#fff"
				isLoading={formState.isSubmitting}
				type="submit"
			>
				Submit
			</Button
			>
		</form>
	
	);
};

export default Form;