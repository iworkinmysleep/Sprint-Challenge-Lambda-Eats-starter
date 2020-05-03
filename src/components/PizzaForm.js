import React, { useState } from "react";
// import * as yup from "yup";
import axios from "axios";

const PizzaForm = () => {
	const initialState = {
		name: "",
		size: "",
		pepperoni: "",
		fourcheese: "",
		cheeseburger: "",
		works: "",
		special: "",
	};

	const [formState, setFormState] = useState(initialState);

	const [pizzaOrder, setPizzaOrder] = useState([]);
	const inputChange = (e) => {
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value,
		};

		// validateChange(e); ADD THIS LATER
		setFormState(newFormData);
	};

	const orderSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
		axios
			.post("https://reqres.in/api/user", formState)
			.then((res) => {
				setPizzaOrder(res.data);
				console.log("success", pizzaOrder);
				setFormState(initialState);
			})
			.catch((err) => console.log(err.response));
	};

	return (
		<div className="pizza_page">
			<h3>Build Your Pizza</h3>
			<form className="pizza_form" onSubmit={orderSubmit}>
				<label htmlFor="name">
					Name
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Please enter name."
						onChange={inputChange}
						value={formState.name}></input>
				</label>
				<label htmlFor="size">
					Choose size
					<select id="size" name="size" onChange={inputChange}>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="x-large">X-Large</option>
					</select>
				</label>
				<h4>Pick Your Toppings</h4>
				<div className="toppings">
					<label htmlFor="pepperoni">
						Pepperoni
						<input
							id="pepperoni"
							name="pepperoni"
							type="checkbox"
							onChange={inputChange}
							checked={formState.pepperoni}></input>
					</label>
					<label htmlFor="fourcheese">
						4-Cheese
						<input
							id="fourcheese"
							name="fourcheese"
							type="checkbox"
							onChange={inputChange}
							checked={formState.fourcheese}></input>
					</label>
					<label htmlFor="cheeseburger">
						Cheeseburger
						<input
							id="cheeseburger"
							name="cheeseburger"
							type="checkbox"
							onChange={inputChange}
							checked={formState.cheeseburger}></input>
					</label>
					<label htmlFor="works">
						The Works
						<input
							id="works"
							name="works"
							type="checkbox"
							onChange={inputChange}
							checked={formState.works}></input>
					</label>
				</div>
				<label htmlFor="special">
					Special Instructions
					<textarea
						name="special"
						onChange={inputChange}
						value={formState.special}></textarea>
				</label>
				<pre>{JSON.stringify(pizzaOrder, null, 2)}</pre>
				<button type="submit">Add to Order</button>
			</form>
		</div>
	);
};

export default PizzaForm;
