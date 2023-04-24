import React from 'react';
import tempLogic, { ColorCardsHandler } from './index';
import classes from './ActionTemp.module.css';

const ActionTemp = (props) => {
   const {
      renderSuccessHeader,
      renderMsgIfDuplicate,
      renderMsgIfNoDuplicate,
      congratsMsg,
      getCards,
      charsArr,
      chars,
   } = tempLogic(props.title);
   let getUniqueChar = new Set(charsArr);
   let renderedCards = ColorCardsHandler(getCards, charsArr, getUniqueChar);

   return (
      <>
         <h2>
            {chars[0].length === getUniqueChar.size && !chars[1]
               ? renderMsgIfNoDuplicate
               : chars[1]
               ? congratsMsg
               : renderMsgIfDuplicate}
         </h2>
         {chars[1] && renderSuccessHeader}
         <ul className={classes['list']}>{renderedCards}</ul>
      </>
   );
};

export default ActionTemp;
