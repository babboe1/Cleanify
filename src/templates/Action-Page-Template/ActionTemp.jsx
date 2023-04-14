/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { trimmedChar, deleteChar, getRandomColor, storeData } from './ActionTemp'
import Card from '../../fragments/Card/Card';
import FormContext from '../../context/Form-Context/FormContext';
import classes from './ActionTemp.module.css'

const ActionTemp = ( props ) => {
   //get user input data from context
   const { inputData } = useContext( FormContext );
   const initialState = inputData[ props.title ]?.inputValue;

   const [ chars, setChars ] = useState( [ trimmedChar( initialState ), false ] );
   const charsArr = chars[ 0 ].split( '' )
   const getCards = charsArr.map( ( char, id ) => {
      return (
         <Card key={ `${ char }${ Math.random() * 1000 }` } text={ char } click={ () => deleteChar( chars[ 0 ], char, id, setChars ) } />
      )
   } );

   let renderCards = getCards;

   //create color object for unique characters and store to local storage to allow characters retain background color before and after a state change
   let getUniqueChar = new Set( charsArr );
   let colorObj = {}
   getUniqueChar.forEach( el => colorObj[ el ] = getRandomColor() )
   const defaultColors = storeData( `get`, 1 ) || colorObj
   storeData( 'set', 1, colorObj )
   const [ colors, setColors ] = useState( defaultColors );


   //modify react element object to add style props for character background color
   const colorCardsHandler = () => {
      getUniqueChar.forEach( ( el, idx ) => {
         const color = colors[ idx ];
         renderCards = renderCards.map( ( obj ) => {
            let newProps = { ...obj.props, style: { background: color } }
            let newObj = { ...obj, props: newProps }
            return obj.props.text === el ? newObj : obj
         } )
      } )
   }
   colorCardsHandler()

   const renderSuccessHeader = (
      <div className={ classes[ 'wrapper' ] }>
         <h2>Success!!! All duplicate character has been removed <br /> Below is the result of cleanify </h2>
         <h3>Original character: <span className={ classes.title }> { trimmedChar( initialState, true ) }</span></h3>
         <h3>Cleanified character: <span className={ classes.title }>{ chars[ 0 ] }</span></h3>
      </div>
   )

   const renderMsgIfDuplicate = `Good job getting here, now click on the delete button below to remove duplicates`
   const renderMsgIfNoDuplicate = `No duplicate character found, Nothing to do here 😴😴`
   const congratsMsg = `Great job🎉🎉🎉, you rock!!!😉`

   return (
      <>
         <h2>
            { ( chars[ 0 ].length === getUniqueChar.size ) && !chars[ 1 ] ? renderMsgIfNoDuplicate : chars[ 1 ] ? congratsMsg : renderMsgIfDuplicate }
         </h2>
         { chars[ 1 ] && renderSuccessHeader }
         <ul className={ classes[ 'list' ] }>
            { renderCards }
         </ul>
      </>
   );
};

export default ActionTemp;