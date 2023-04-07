import React, { useRef, useContext, useState, useEffect } from 'react';
import { inputLogic } from './Input';
import classes from './Input.module.css';
import FormContext from '../../../context/Form-Context/FormContext';

const Input = ( props ) => {
   const defaultState = {
      isInputEmpty: true,
      isInputValid: false,
      isValid: false,
      showMessage: false,
      inputValue: '',
   };

   const { setInputData } = useContext( FormContext );

   const [ inputStates, setInputStates ] = useState( defaultState );
   const textInputRef = useRef( null );

   //store input value to context data
   useEffect( () => {
      setInputData( ( prevState ) => {
         return {
            ...prevState,
            [ props.title ]: inputStates,
         };
      } );
   }, [inputStates, props.title, setInputData] );

   //trigger error message when input validation fails
   const renderErrorMsg = (
      <p className={classes['error-msg']}>
         { inputStates.isValid
            ? ''
            : inputStates.isInputEmpty
               ? `Text field cannot be empty`
               : `Provide a non-empty value or a valid entry` }
      </p>
   );

   return (
      <div>
         <input
            data-testid={ props.title }
            ref={ textInputRef }
            className={ `${ classes[ 'question' ] } ${ props.classProp }` }
            onChange={ props.change ? props.change : () => inputLogic( textInputRef, setInputStates ) }
            id={ props.title }
            placeholder={ props.placeholder }
            name={ props.title }
            type={ props.type ? props.type : 'text' }
            required={ props.required }
         />
         <label htmlFor={ props.title }><span className={ classes.span }>{ props.label }</span></label>
         { inputStates.showMessage ? renderErrorMsg : null }
      </div>
   );
};
export default Input;
