import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Create from "./Pages/Create/";
import Show from "./Pages/Show";
import NotFound from "./Pages/NotFound";
import PizzaDetails from "./Pages/Show/PizzaDetails";
import Edit from "./Pages/Edit";

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/contact">
							<Contact/>
						</Route>
						<Route path="/create">
							<Create/>
						</Route>
						<Route exact path="/show">
							<Show/>
						</Route>
						<Route exact path="/show/:id">
							<PizzaDetails/>
						</Route>
						<Route exact path="/edit/:id">
							<Edit/>
						</Route>
						<Route path="*">
							<NotFound/>
						</Route>
					</Switch>
				</Layout>
			</Router>
		</>
	);
}

export default App;
