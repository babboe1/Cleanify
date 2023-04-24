import React, { useContext, useState } from 'react';
import Card from '../../fragments/Card/Card';
import FormContext from '../../context/Form-Context/FormContext';
import classes from './ActionTemp.module.css';

export default function TempLogic(title) {
   const renderMsgIfDuplicate = `Good job getting here, now click on the delete button below to remove duplicates`;
   const renderMsgIfNoDuplicate = `No duplicate character found, Nothing to do here 😴😴`;
   const congratsMsg = `Great job🎉🎉🎉, you rock!!!😉`;

   //get user input data from context
   const { inputData } = useContext(FormContext);
   const initialState = inputData[title]?.inputValue;

   //create array of characters from user input
   const [chars, setChars] = useState([trimmedChar(initialState), false]);
   const charsArr = chars[0].split('');
   const getCards = charsArr.map((char, id) => {
      return (
         <Card
            key={`${char}${Math.random() * 1000}`}
            text={char}
            click={() => deleteChar(chars[0], char, id, setChars)}
         />
      );
   });

   //render success header
   const renderSuccessHeader = (
      <div className={classes['wrapper']}>
         <h2>
            Success!!! All duplicate character has been removed <br /> Below is
            the result of cleanify{' '}
         </h2>
         <h3>
            Original character:{' '}
            <span className={classes.title}>
               {' '}
               {trimmedChar(initialState, true)}
            </span>
         </h3>
         <h3>
            Cleanified character:{' '}
            <span className={classes.title}>{chars[0]}</span>
         </h3>
      </div>
   );

   return {
      renderSuccessHeader,
      renderMsgIfDuplicate,
      renderMsgIfNoDuplicate,
      congratsMsg,
      getCards,
      charsArr,
      chars,
      initialState,
   };
}

export const ColorCardsHandler = (getCards, charsArr, getUniqueChar) => {
   //create color object for unique characters and store to local storage to allow characters retain background color before and after a state change
   let colorObj = {};
   const defaultColors = storeData(`get`, 1) || colorObj;
   const [colors] = useState(defaultColors);
   let renderCards = getCards;

   getUniqueChar.forEach((el) => (colorObj[el] = getRandomColor()));
   storeData('set', 1, colorObj);

   //modify react element object to add style props for character background color
   const getCardColors = () => {
      getUniqueChar.forEach((el, idx) => {
         const color = colors[idx];
         renderCards = renderCards.map((obj) => {
            let newProps = { ...obj.props, style: { background: color } };
            let newObj = { ...obj, props: newProps };
            return obj.props.text === el ? newObj : obj;
         });
      });
   };
   getCardColors();
   return renderCards;
};

export const trimmedChar = (str, check) => {
   //get saved data from local storage
   const localStorageData = JSON.parse(
      window.localStorage.getItem('inputsDataState'),
   );

   //ensure that user cannot access action page by redirecting to home page if no input value found
   if (!str && !localStorageData) return (window.location.pathname = '/');

   //check saved data in other to retain state on page reload or mount
   if (check && !str) return localStorageData.inputValue;
   if (check && str) return str;

   return localStorageData
      ? localStorageData.inputValue.replace(/\s/g, '')
      : str.replace(/\s/g, '');
};

export const deleteChar = (str, char, id, setState) => {
   //get unique characters from string and filter the clicked char
   let uniqueChars = new Set(str);
   let splittedString = str.split('');
   let filteredString = splittedString.filter(
      (el, i) => el !== char || i === id,
   );

   if (filteredString.length === splittedString.length) return;
   if (uniqueChars.size === (filteredString.length || splittedString.length)) {
      console.log('yes');
      setState([filteredString.join(''), true]);
   } else {
      setState((prev) => [filteredString.join(''), prev[1]]);
      console.log('unique', uniqueChars);
      console.log('filtered', filteredString);
      console.log('splitted', splittedString);
   }

   alert(
      `Your characters has been successfully cleanified, you new character is "${filteredString.join(
         '',
      )}"`,
   );
};

export const getRandomColor = () => {
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 200);
   const blue = Math.floor(Math.random() * 150);
   return `rgb(${red}, ${green}, ${blue}, 0.4)`;
};

export const storeData = (key, idx, arg) => {
   if (key === 'set') {
      window.localStorage.setItem(`color-${idx}`, JSON.stringify(arg));
   } else if (key === 'get') {
      return JSON.parse(window.localStorage.getItem(`color-${idx}`));
   }
   window.onload = () => {
      window.localStorage.removeItem(`color-${idx}`);
   };
};
