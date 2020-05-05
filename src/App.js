import React from "react";
import { Route, Link } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			{/* <nav>
				<h1 className="header">Lambda Eats</h1>
				<div className="pizza_link">
					<Link to="/pizza">Order Pizza</Link>
					<Link to="/">Home</Link>
				</div>
			</nav> */}
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={PizzaForm} />
		</div>
	);
};
export default App;
