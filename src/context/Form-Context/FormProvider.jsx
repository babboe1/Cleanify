import React, { useState } from 'react';
import FormContext from './FormContext';

const FormProvider = ( { children } ) => {
   const [ inputData, setInputData ] = useState( '' );

   const value = {
      inputData,
      setInputData,
   };
   return <FormContext.Provider value={ value }>{ children }</FormContext.Provider>;
};

export default FormProvider;
