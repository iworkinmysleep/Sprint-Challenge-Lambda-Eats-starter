import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav>
				<h1 className="header">Lambda Eats</h1>
				<div className="pizza_link">
					<Link to="/pizza">Order Pizza</Link>
				</div>
		</nav>
  )
}

export default Header