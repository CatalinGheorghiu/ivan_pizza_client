import React from "react";
import {FormControl, FormErrorMessage, Textarea} from "@chakra-ui/react";

const FormTextarea = ({
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
				<Textarea ref={register}
				          placeholder={placeholder}
				          onChange={onChange}
				          type={type}
				          {...inputProps}/>
				<FormErrorMessage>
					{error && <div>{error.message}</div>}
				</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default FormTextarea;
