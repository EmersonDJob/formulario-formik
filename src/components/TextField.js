import React from 'react'
import {ErrorMessage, useField } from 'formik'

export const TextField = ({label, ...props}) => {
  const [field , meta] = useField(props)
  console.log(field)
  console.log(meta)
    return (
        <div>
         <label htmlFor={field.name}>{label}</label>
           <input  
            {...field}{...props} 
           autoComplete="off" />
           <ErrorMessage component="div" name={field.name} />
        </div>
    )
}
