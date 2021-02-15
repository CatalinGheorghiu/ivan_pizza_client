import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	origin: yup.string().required(),
	ingredients: yup.array().of(yup.object()).min(1).required(),
	img: yup.string(),
	description: yup.string().min(15).required()
	
});

export default schema;