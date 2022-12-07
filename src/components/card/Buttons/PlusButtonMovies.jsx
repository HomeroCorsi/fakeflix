import React from 'react'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { MoviesIdContext } from '../../../context/MoviesIdContext'

const PlusButtonMovies = ({item}) => {

	const {MoviesId, setMoviesId} = useContext(MoviesIdContext)
	// const [newId, setNewId] = useState([])

	const itemid = item.id

  return (
        <StyledPlusButton onClick={() => 
			
			setMoviesId(prevState => {
				// check if it is already added
				if(prevState.includes(itemid)) { 
				  // clone the prevState arr to prevent side effects  
				   const clone = [...prevState];
				 // Remove the existing id 
				//    clone.splice(prevState.indexOf(itemid), 1)
				   return clone;
				} else {
				   return [...prevState, itemid]
				}})
		
		
		}
		title={"Añadir a mi lista"}

		/>
    )
}

export default PlusButtonMovies;

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