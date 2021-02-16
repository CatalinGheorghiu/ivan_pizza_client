import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required("Name is a required field"),
	origin: yup.string().required("Origin is a required field"),
	ingredients: yup.array().min(1,"Ingredients field must have at least 1 item").required(),
	img: yup.string().default(""),
	description: yup.string().min(15, "Description must be at least 15 characters").required()
	
});

export default schema;