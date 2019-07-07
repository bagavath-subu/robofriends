import React from 'react';
import './Card.css';

const Card =(props)=> {
    let source=`https://robohash.org/${props.id}`;
    
    return (
            <div className="ma3 ba b--silver navy br2 fl grow">
             <img src={source} alt="broken"/>
             <p>{props.id}</p>   
            </div>
        )
}
export default Card;

