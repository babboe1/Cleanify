import React from 'react';
import './Animate.css'

const Animate = ( props ) => {
   // const [ isMounted, setIsMounted ] = useState( true );

   return (
      <div id="animate" className ='mounted'>
         { props.children }
      </div>
   );
};

export default Animate;