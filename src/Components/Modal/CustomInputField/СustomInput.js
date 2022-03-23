import React from "react";
import '../Modal.css';
import errorImage from './errorImage.svg';
import {maxLength20, requiredField} from "../../../FormValidation/validators";

const CustomInput = ({input, meta, ...props}) => {
    return (

        <div>
            <input {...input} {...props}
                   className={"nameInput" + " " + (meta.touched && meta.error ? " error" : "")}
                   validate={[requiredField, maxLength20]}/>
            {meta.touched && meta.error &&
            <div className="errorBlock">
                <img src={errorImage} width={7} height={7}/>
                <span>{meta.error}</span>
            </div>}

        </div>
    )
}
export default CustomInput;