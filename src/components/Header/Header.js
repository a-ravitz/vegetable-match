import React from 'react';
import './header.css'


function Header({score, topScore}){
    
    return (
    <div>
        <header className="header"> 
            <h2 className="item">Score: {score} ~ Top Score: {topScore}</h2>
        
        </header>
    </div>
    )
  }

export default Header;