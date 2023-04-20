import React from 'react';
import formLogic, { formSubmitHandler, disableBtnHandler } from './index';
import Button from '../Button/Button';
import classes from './Form.module.css';

const Form = ({ children, submit, success }) => {
   const { navigate, disabled, handleDisable, isEmpty } = formLogic(children);

   return (
      <form
         className={classes['form']}
         data-testid="form"
         onSubmit={
            submit ? submit : (e) => formSubmitHandler(e, navigate, 'action')
         }
      >
         {children}
         <Button
            type="submit"
            disable={disabled && handleDisable}
            click={(e) => isEmpty && disableBtnHandler(e)}
         >
            Submit ✔
         </Button>
      </form>
   );
};

export default Form;
