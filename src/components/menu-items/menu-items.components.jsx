import React from 'react';

import {withRouter} from 'react-router-dom';

import './menu-items.styles.scss';

const MenuItems = ( {title, imageUrl, size, history, match, linkUrl}) => {
    return (
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        
            <div 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            
            className="background-image"></div>

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> SHOP NOW</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItems);
