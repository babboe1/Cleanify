import React, { useState } from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete.svg';
import checkIcon from '../../assets/icons/check.svg';

export default function ButtonTypes ( props, clickFn, state ) {
   //state for success button
   const [success, setSuccess] = useState('');
   const handleClick = () => {
      setSuccess('success');
      props.click();
   };

   //return button based on props type
   switch (props.type) {
      case 'submit':
         return (
            <div className={classes['buttons']}>
               <button
                  onClick={props.click}
                  type="submit"
                  className={`${classes['blob-btn']} ${props.classProp} ${
                     !props.disable ? classes.disabled : ''
                  }`}
                  disabled={props.disable && `disabled`}
               >
                  {props.children ? props.children : 'Submit'}
                  <span className={classes['blob-btn__inner']}>
                     <span className={classes['blob-btn__blobs']}>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                     </span>
                  </span>
               </button>
               <br />
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                     <filter id="goo">
                        <feGaussianBlur
                           in="SourceGraphic"
                           result="blur"
                           stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                           in="blur"
                           mode="matrix"
                           values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                           result="goo"
                        ></feColorMatrix>
                        <feBlend
                           in2="goo"
                           in="SourceGraphic"
                           result="mix"
                        ></feBlend>
                     </filter>
                  </defs>
               </svg>
            </div>
         );

      case 'delete':
         return (
            <button
               onClick={clickFn || handleClick}
               className={`${classes['button']} ${classes[state || success]}`}
            >
               <span>remove</span>
               <div className={classes['icon']}>
                  <img
                     src={checkIcon}
                     alt="check"
                     className={`${classes['fa']} ${classes['fa-check']}`}
                  />
                  <img
                     src={deleteIcon}
                     className={`${classes['fa']} ${classes['fa-remove']}`}
                     alt="delete"
                  />
               </div>
            </button>
         );
      default:
         return (
            <div className={`${classes['buttons']} ${classes['extra']}`}>
               <Link
                  role="button"
                  to={props.path}
                  className={`${classes['blob-btn']} ${props.classProp}`}
               >
                  {props.children ? props.children : 'button'}
                  <span className={classes['blob-btn__inner']}>
                     <span className={classes['blob-btn__blobs']}>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                        <span className={classes['blob-btn__blob']}></span>
                     </span>
                  </span>
               </Link>
               <br />
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                     <filter id="goo">
                        <feGaussianBlur
                           in="SourceGraphic"
                           result="blur"
                           stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                           in="blur"
                           mode="matrix"
                           values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                           result="goo"
                        ></feColorMatrix>
                        <feBlend
                           in2="goo"
                           in="SourceGraphic"
                           result="mix"
                        ></feBlend>
                     </filter>
                  </defs>
               </svg>
            </div>
         );
   }
};
