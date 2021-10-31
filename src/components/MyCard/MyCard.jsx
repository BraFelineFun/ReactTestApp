import React from 'react';
import classes from "./MyCard.module.css"

function MyCard(props) {
    const dateArr = props.card.date.split('.');
    const day = dateArr[0];
    // const month = dateArr[1];

    return (
        <div       
            style={{ backgroundImage: `url(${props.card.image})` }}
            className={classes.cardsBox__card}
        >
            <div className={classes.cardsBox__date}>
                <div className={classes.cardBox__dateCenter}>{day}</div>
            </div>
            <div className={classes.cardsBox__favorite}>
                <img
                    src="https://www.svgrepo.com/show/324224/bookmark-favorite-favourite.svg"
                    alt="Favorite"
                />
            </div>
            <div className={classes.cardsBox__title}>{props.card.name}</div>
        </div>
    );
}

export default MyCard;