import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { formSubmitHandler, disableBtnHandler } from './Form'
import Button from '../Button/Button';
import FormContext from '../../context/Form-Context/FormContext';
import classes from './Form.module.css'

const Form = ( { children, submit, success } ) => {
   const navigate = useNavigate();
   const context = useContext( FormContext )
   const disabled = context.inputData[ children.props.title ]?.showMessage

   const handleDisable = context.inputData[ children.props.title ]?.isInputValid ? null : 'disabled'
   const isEmpty = context.inputData[ children.props.title ]?.isInputEmpty

   return (
      <form className={ classes[ "form" ] } data-testid='form' onSubmit={ submit ? submit : ( e ) => formSubmitHandler( e, navigate, 'action' ) }>
         { children }
         <Button type="submit" disable={  disabled  && handleDisable } click={ ( e ) => isEmpty && disableBtnHandler( e ) } >Submit ✔</Button>
      </form>
   );
};

export default Form;