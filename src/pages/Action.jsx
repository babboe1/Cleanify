import React from 'react';
import ActionTemp from '../templates/Action-Page-Template/ActionTemp.jsx';
import Animate from '../containers/Animate.jsx';
import Button from '../components/Button/Button.jsx';

const Action = () => {
   return (
      <Animate mount={ true }>
         <Button path="/">Go back ↩</Button>
         <ActionTemp title='text-input' />
      </Animate>
   );
};

export default Action;