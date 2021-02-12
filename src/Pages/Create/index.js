import React, {useState} from "react";
import {Flex} from "@chakra-ui/react";


const Create = () => {
	const [fileInputState, setFileInputState] = useState("");
	const [selectedFile, setSelectedFile] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	
	const handleInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};
	
	const previewFile = (file) => {
		const reader = new FileReader();
		//Convert url to string
		reader.readAsDataURL(file);
		
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	
	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!previewSource) console.log("ERROR");
		uploadImage(previewSource);
	};
	
	const uploadImage = async (base64EncodedImage) => {
		try {
			await fetch("/upload", {
				method: "POST",
				body: JSON.stringify({data: base64EncodedImage}),
				headers: {"Content-type": "application/json"}
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		
		<Flex color="#fff" align="center" justify="center" bg="tomato">
			<form onSubmit={handleSubmitFile}>
				<input type="file" name="image" id="image" onChange={handleInputChange}
				       value={fileInputState}/>
				
				<button type="submit">Submit</button>
			</form>
			{previewSource && (<img src={previewSource} alt="preview img"/>)}
		</Flex>
	
	);
};

export default Create;
