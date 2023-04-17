import React from 'react';
import FormProvider from './context/Form-Context/FormProvider';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Action from './pages/Action';
import Layout from './layout/Layout';

const App = () => {
   return (
      <FormProvider>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Home />
                  </Layout>
               }
            />
            <Route
               path="/action"
               element={
                  <Layout classProp="no-bg">
                     <Action />
                  </Layout>
               }
            />
         </Routes>
      </FormProvider>
   );
};

export default App;
