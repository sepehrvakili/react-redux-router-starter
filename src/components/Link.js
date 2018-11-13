import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Link = ({ children, filter }) => (
	<NavLink
		to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
		activeStyle={{
			textDecoration: 'none',
			color: 'black'
		}}
	>
		{children}
	</NavLink>
)

Link.propTypes = {
	children: PropTypes.node.isRequired,
	filter: PropTypes.string.isRequired,
}

export default Link
