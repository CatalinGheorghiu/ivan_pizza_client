import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	origin: yup.string().required(),
	ingredients: yup.array().min(1).required(),
	img: yup.string().default(""),
	description: yup.string().min(15)
	
});

export default schema;