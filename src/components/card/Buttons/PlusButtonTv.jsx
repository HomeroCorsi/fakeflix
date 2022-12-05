import React from 'react'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { TvIdContext } from '../../../context/TvIdContext'

const PlusButtonTv = ({item}) => {

	const {TvId, setTvId} = useContext(TvIdContext)
	// const [newId, setNewId] = useState([])

	const itemid = item.id

  return (
        <StyledPlusButton onClick={() => 
			
			setTvId(prevState => {
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
		
		
		}/>
    )
}

export default PlusButtonTv;

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