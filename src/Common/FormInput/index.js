import React from "react";
import {FormControl, FormErrorMessage, Input} from "@chakra-ui/react";

const FormInput = ({
	                   register,
	                   error,
	                   placeholder,
	                   onChange,
	                   type,
	                   ...inputProps
                   }) => {
	return (
		<>
			<FormControl isInvalid={error} color="#fff" my="15px">
				<Input
					ref={register}
					placeholder={placeholder}
					onChange={onChange}
					type={type}
					{...inputProps}
				/>
				<FormErrorMessage>
					{error && <div>{error.message}</div>}
				</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default FormInput;
