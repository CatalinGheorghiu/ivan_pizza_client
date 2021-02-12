import React  from "react";
import Header from "./Header";
import Footer from "./Footer";

const index = ({children}) => {
	return (
		<>
			<Header/>
			<main style={{
				flexGrow: "1",
				background: `#f3f3f5 url(${require("../Img/bg2.jpg").default}) no-repeat center center fixed`,
				backgroundSize: "cover"
			}}>{children}</main>
			<Footer/>
		</>
	);
};

export default index;
