import React from 'react'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { TvIdContext } from '../../../context/TvIdContext'

const RemoveButtonTv = ({item}) => {

	const {setTvId} = useContext(TvIdContext)


	const itemid = item

        return(<button style={RemoveButton} 
        onClick={  () =>  setTvId(prevState => {
          // check if it is already added
          if(prevState.includes(itemid)) { 
            // clone the prevState arr to prevent side effects  
             const clone = [...prevState];
           // Remove the existing id 
             clone.splice(prevState.indexOf(itemid), 1)
             return clone;
          } else {
             return [...prevState, itemid]
          }})
        }
      
        >
         <span style={removeStyle}>Quitar</span>

          </button>)

    }


export default RemoveButtonTv


const RemoveButton = { 
      backgroundColor: '#fff',
    marginTop: '0.8rem',
    marginRight: '2.5rem',
    height: '2rem',
    width: '4rem',
    borderRadius: '0.8rem',

    }

const removeStyle = {
position: 'relative',
right:'1.9rem',
fontSize:'1.4rem',
bottom: '0.9rem'

}

