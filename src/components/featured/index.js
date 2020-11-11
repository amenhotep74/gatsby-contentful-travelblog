import React from 'react';
import { navigate } from 'gatsby';
import './featured.css'
import Header from '../../images/header.jpg';

const Featured = () => (
<header>
        <div className="header__section">
            <div className="header__hero" 
            style={{ 
                backgroundImage: `url(${Header})`}}>
            </div>
            <div className="header__content">
                <div className="header__info">
                    <h1 className="header_title">Full Stack Web Developer</h1>
                    <p className="header__subtitle">From Adelaide, Australia specialising developing Web Applications, Mobile Applications, Shopify/Ecommerce and Wordpress. Scroll down to see some of my demo projects.</p>
                    <button onClick={() => navigate(`/contact`)} className="btn__med">Contact</button>
                    <button onClick={() => navigate(`/`)} className="btn__med_right">Resume</button>
                </div>
            </div>
        </div>
</header>
)

export default Featured;
