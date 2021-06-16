import React, { Fragment } from "react"
import "./input.scss"

export const Input = ( {id, value, type, placeholder, onChange} ) => {

    return (
        <Fragment>
        <input  onChange={ ({target}) => onChange(id, target.value) } value={value} type={type} placeholder={placeholder}/>
        </Fragment>
    )
}