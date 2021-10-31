import React from 'react';
import MyCard from './MyCard/MyCard';

function CardList({cards}) {

    // console.log(cards);
    if(!cards.length){
        return (
            <h1 style={{ margin:'40px', textAlign: "center" }}>
                No suitable events were found
            </h1>
        )
    }
    else{
        return (
            <div className="cardsBox">
                {cards.map((card) => 
                    <MyCard key={card.id} card={card} />
                )}
            </div>
        );
    }

}

export default CardList;