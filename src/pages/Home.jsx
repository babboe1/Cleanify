import React from 'react';
import Form from '../components/Form/Form.jsx';
import Input from '../components/Form-Control/Input/Input.jsx';
import Animate from '../containers/Animate.jsx';

const Home = () => {
   return (
      <Animate mount='true'>
         <h1>Welcome to Cleanify</h1>
         <h2>Cleanify is a web application that removes instances of a duplicate character from your text or string, leaving just one occurrence of the character </h2>
         <h3>Enter your text in the form below and click the 'Submit' button to see the results of cleanify</h3>
         <Form>
            <Input key='text-input' type="text" title="text-input" label="Enter text here " required="required" />
         </Form>
      </Animate>
   );
};

export default Home;