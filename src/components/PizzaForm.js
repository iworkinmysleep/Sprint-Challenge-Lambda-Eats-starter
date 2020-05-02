import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PizzaForm = () => {
	return (
		<div className="pizza_page">
			<h3>Build Your Pizza</h3>
			<button className='home_button'>Home</button>
			<form className="pizza_form">
				<label htmlFor="name">
					Name
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Please enter name."></input>
				</label>
				<label htmlFor="size">
					Choose size
					<select id="size" name="size">
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="x-large">X-Large</option>
					</select>
				</label>
				<h4>Pick Your Toppings</h4>
				<label htmlFor="pepperoni">
					Pepperoni
					<input id="pepperoni" name="pepperoni" type="checkbox"></input>
				</label>
				<label htmlFor="fourcheese">
					4-Cheese
					<input id="fourcheese" name="fourcheese" type="checkbox"></input>
				</label>
				<label htmlFor="cheeseburger">
					Cheeseburger
					<input id="cheeseburger" name="cheeseburger" type="checkbox"></input>
				</label>
				<label htmlFor="works">
					The Works
					<input id="works" name="works" type="checkbox"></input>
				</label>
				<label htmlFor="special">
					Special Instructions
					<textarea id="special" type="text"></textarea>
				</label>
				<button type="submit">Add to Cart</button>
			</form>
		</div>
	);
};

export default PizzaForm;
