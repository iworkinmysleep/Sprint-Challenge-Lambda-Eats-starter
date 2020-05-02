import React, { useState } from "react";
import * as yup from "yup";
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
	const [errors, setErrors] = useState(initialState);
	const [pizzaOrder, setPizzaOrder] = useState([]);

	const nameSchema = yup.object().shape({
		name: yup
			.string()
			.required("This field is required.")
			.min(2, "Minimum of two characters"),
	});

	const orderSubmit = (e) => {
		e.prevent.default();
		axios
			.get("https://reqres.in/api/users", formState)
			.then((res) => {
				console.log(res.data);
				setPizzaOrder(res.data);
				setFormState(initialState);
			})
			.catch((err) => console.log(err.response));
	};

	const inputChange = (e) => {
		console.log(e.target.value);
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]: e.target.value,
		};
		setFormState(newFormData);
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
							onChange={inputChange}></input>
					</label>
					<label htmlFor="fourcheese">
						4-Cheese
						<input
							id="fourcheese"
							name="fourcheese"
							type="checkbox"
							onChange={inputChange}></input>
					</label>
					<label htmlFor="cheeseburger">
						Cheeseburger
						<input
							id="cheeseburger"
							name="cheeseburger"
							type="checkbox"
							onChange={inputChange}></input>
					</label>
					<label htmlFor="works">
						The Works
						<input
							id="works"
							name="works"
							type="checkbox"
							onChange={inputChange}></input>
					</label>
				</div>
				<label htmlFor="special">
					Special Instructions
					<textarea id="special" type="text" onChange={inputChange}></textarea>
				</label>
				<pre>{JSON.stringify(pizzaOrder, null, 2)}</pre>

				<button type="submit">Add to Order</button>
			</form>
		</div>
	);
};

export default PizzaForm;
