import React from "react";
import {Button, Flex, Text} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import FormInput from "../../Common/FormInput";
import FormTextarea from "../../Common/FormTextarea";

const Contact = () => {
	const {handleSubmit, errors, register, formState, control} = useForm();
	
	const onSubmit = (values) => {
		console.log(values);
	};
	
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
					Keep in touch with Us
				</Text>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						name="name"
						id="name"
						placeholder="First Name"
						register={register}
					/>
					<FormInput
						name="name"
						id="name"
						placeholder="Last Name"
						register={register}
					/>
					<FormInput
						name="name"
						id="name"
						placeholder="Email"
						type="email"
						register={register}
					/>
					<FormTextarea
						color="#fff"
						name="message"
						placeholder="Message"
						register={register}
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
					</Button>
				</form>
			</Flex>
		</Flex>
	);
};

export default Contact;
