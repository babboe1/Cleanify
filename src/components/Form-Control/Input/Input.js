const validTextPattern = /^\s*\S.*\S\s*$|^\s*\S\s*$/;

export const inputLogic = (ref, setState) => {
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
