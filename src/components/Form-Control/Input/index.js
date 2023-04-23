import React, { useRef, useContext, useState, useEffect } from 'react';
import classes from './Input.module.css';
import FormContext from '../../../context/Form-Context/FormContext';

//regex pattern to validate input
const validTextPattern = /^\s*\S.*\S\s*$|^\s*\S\s*$/;

export default function InputLogic(title) {
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
            [ title ]: inputStates,
         };
      } );
   }, [inputStates, title, setInputData] );

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

   return {
      renderErrorMsg,
      textInputRef,
      inputStates,
      setInputStates,
   }
}

export const validationLogic = (ref, setState) => {
   const isInputValid = validTextPattern.test(ref.current.value);
   const isInputEmpty = ref.current.value === '';
   const isValid = !isInputEmpty && isInputValid;
   const newState = {
      isInputValid,
      isInputEmpty,
      isValid,
      showMessage: true,
      inputValue: ref.current.value,
   };
   setState(newState);
   window.localStorage.setItem('inputsDataState', JSON.stringify(newState));
};
