import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContext from '../../context/Form-Context/FormContext';

export default function FormLogic(children) {
   const context = useContext(FormContext);
   const navigate = useNavigate();
   const disabled = context.inputData[children.props.title]?.showMessage;
   const handleDisable = context.inputData[children.props.title]?.isInputValid
      ? null
      : 'disabled';
   const isEmpty = context.inputData[children.props.title]?.isInputEmpty;

   return {
      navigate,
      disabled,
      handleDisable,
      isEmpty,
   };
}

export const formSubmitHandler = (e, nav, path) => {
   e.preventDefault();
   e.target.reset();
   document.getElementById('animate')?.classList.add('unmount');
   setTimeout(() => {
      nav(`/${path}`);
   }, 1000);
};

export const disableBtnHandler = (e) => {
   e.preventDefault();
   alert(
      'Text field cannot be empty, please input a non-empty value or valid character',
   );
};
