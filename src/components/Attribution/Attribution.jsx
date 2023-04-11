import React from 'react';

import classes from './Attribution.module.css';

const Attribution = () => {
   return (
      <div className={classes["footer-attribution"]}>
         &copy; 2023 All rights reserved. Coded by &nbsp;
         <a
            target="_blank"
            href="http://github.com/babboe1"
            rel="noreferrer"
         >
            babboeCodes
         </a>
         .
      </div>
   );
};

export default Attribution;
