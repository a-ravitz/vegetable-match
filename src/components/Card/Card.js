import React from 'react'
import './card.css'

function Card({src, id, score, clickCount}) {

    return (
        <div className="card" onClick={() => clickCount(id)}>
        <img alt={id} src={src} data-id={id} onClick={score}></img>
    </div>
  );
  


}

  export default Card