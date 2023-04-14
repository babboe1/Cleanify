export const trimmedChar = (str, check) => {
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
   let uniqueChars = new Set(str);
   let splittedString = str.split('');
   let filteredString = splittedString.filter(
      (el, i) => el !== char || i === id,
   );

   if (filteredString.length === splittedString.length) return;
   if (
      uniqueChars.size === (filteredString.length || splittedString.length)
   ) {
      console.log('yes');
      setState([filteredString.join(''), true]);
   } else {
      setState( ( prev ) => [ filteredString.join( '' ), prev[ 1 ] ] );
      console.log( 'unique', uniqueChars );
      console.log( 'filtered', filteredString );
      console.log( 'splitted', splittedString );
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
