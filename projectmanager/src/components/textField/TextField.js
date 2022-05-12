import React from 'react'
import {useField,ErrorMessage} from "formik";
import "./textField.css";

const TextField = ({label,...props}) => {
    const [field,meta]=useField(props)
  return (
    <div className="newProjectItem">
      <label htmlFor={field.name}>{label}</label>
        <input className={`inputfieldstyle ${meta.touched && meta.error && 'is-invalid'}`} autoComplete='false' {...field} {...props} />
        <ErrorMessage component="div" className='error' name={field.name}/>
    </div>
  )
}

export default TextField