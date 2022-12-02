import React from 'react'
import styled from 'styled-components'

const PlusButton = () => {
  return (
        <StyledPlusButton/>
    )
}

export default PlusButton

const StyledPlusButton = styled.button`
	border: 2px solid lightgrey;
	background-color: #fff;
	font-size: 16px;
	height: 2rem;
	width: 2rem;
	border-radius: 1rem;
	position: relative;
    right: 2rem;
    top: 0.8rem;
	
	&:after,
	&:before {
		content: "";
		display: block;
		background-color: grey;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	&:before {
		height: 1em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 1em;
	}
`