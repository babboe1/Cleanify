import React from 'react';
import Attribution from '../components/Attribution/Attribution';
import classes from './Layout.module.css';

const Layout = ( { children, classProp } ) => {
   return (
      <>
         <main className={`${classes["main"]} ${classes[classProp]}`}>
            { children }
         </main>
         <footer>
            <Attribution />
         </footer>
      </>
   );
};

export default Layout;