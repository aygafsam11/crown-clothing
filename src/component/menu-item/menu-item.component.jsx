import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onclick={() => history.push(`${match.linkUrl}${linkUrl}`)}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }} />
        <div className='content'>
            <h1 className='title'> {title}</h1>
            <span className='subtitle'> SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);