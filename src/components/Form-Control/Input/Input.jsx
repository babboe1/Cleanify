import React from 'react';
import inputLogic, { validationLogic } from './index';
import classes from './Input.module.css';

const Input = (props) => {
   const { renderErrorMsg, textInputRef, inputStates, setInputStates } =
      inputLogic(props.title);

   return (
      <div>
         <input
            data-testid={props.title}
            ref={textInputRef}
            className={`${classes['question']} ${props.classProp}`}
            onChange={
               props.change
                  ? props.change
                  : () => validationLogic(textInputRef, setInputStates)
            }
            id={props.title}
            placeholder={props.placeholder}
            name={props.title}
            type={props.type ? props.type : 'text'}
            required={props.required}
         />
         <label htmlFor={props.title}>
            <span className={classes.span}>{props.label}</span>
         </label>
         {inputStates.showMessage ? renderErrorMsg : null}
      </div>
   );
};
export default Input;
