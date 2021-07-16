import React from 'react'
import {ErrorMessage, useField } from 'formik'
import  styled from 'styled-components';



export const TextField = ({label, ...props}) => {
  const [field , meta] = useField(props)

    return (
        <Box>
             <label htmlFor={field.name}>{label}</label>
             <input  
             {...field}{...props} 
             autoComplete="off" />
            <ErrorMessage component="div" name={field.name}/>
        </Box>
    )
}
const Box = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: stretch;
  flex-direction: column;
  width:350px;
 

  label {         
     color: #006B3F;
     font-size: larger;
     font-weight: bold;
     margin-top: 10px;
     margin-bottom: 5px;
  }
  input {
      border: 1px solid #006B3F;
      border-radius: 5px;
      height: 2rem;
      width: 100%;
      
  }
  input::hover {
    border: 1px solid black;
    width: 100%;
  }
  div  {
     font-weight: bold;
     font-family: monospace;
      margin-top: 5px;
     padding-top: 5px;
     padding-right: 5px;
     padding-bottom: 5px;
      width: 100%;
      border: 2px solid red;
      border-radius: 5px;     
     color: red;
  }
`;
