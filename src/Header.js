import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import './Header.css'; 

function Header(){
    return(
        // bem 
        <div>
        <div className ="header">
            <IconButton>
                <PersonIcon className = "header__icon" fontSize='large'/>
            </IconButton>
            <img className = "header__logo" src= "https://proptechjb.s3.us-east-2.amazonaws.com/Group+2.png"  alt = "Match match match logo"/>
            <IconButton>
               <ForumIcon className = "header__icon" fontSize='large'/>
            </IconButton>
        </div> 
            <div class = "container">
            <h2 class = "match_words">Match, Match, Match</h2>
            </div>
        </div>
    );
}

export default Header
