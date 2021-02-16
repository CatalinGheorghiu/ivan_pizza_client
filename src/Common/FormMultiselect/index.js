import React from "react";
import {Controller} from "react-hook-form";
import MultiSelect from "react-multi-select-component";
import options from "../../Assets/Options";
import {FormControl, FormErrorMessage} from "@chakra-ui/react";

const FormMultiselect = ({error,control,name,defaultValue}) => {
	return (
		<>
			<FormControl isInvalid={error} my="15px "
			             style={{color: "#000"}}>
				<Controller
					control={control}
					name={name}
					defaultValue={defaultValue}
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
					{error && <div>{error.message}</div>}
				</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default FormMultiselect;
