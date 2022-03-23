import React from "react";
import errorImage from "./errorImage.svg";
import {maxLength20, requiredField} from "../../../FormValidation/validators";

const CustomTextarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}
                      className={(meta.touched && meta.error ? "error" : "")}/>
            {meta.touched && meta.error &&
            <div className="errorBlock">
                <img src={errorImage} width={7} height={7}/>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
}
export default CustomTextarea;