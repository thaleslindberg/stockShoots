import React from 'react';
import { MdMonochromePhotos } from 'react-icons/md';

const Title = () => {
    return (
        <div className="title">
            <header>
                <h1>StockShoots 
                    <MdMonochromePhotos id="header-icon" />
                </h1>
            </header>
            <h2>Your Pictures</h2>
            <p>Share all of your journey and experiences here.</p>
        </div>


    );
}

export default Title;