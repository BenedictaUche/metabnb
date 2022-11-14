import React from 'react';
import star from '../imgs/star.png';

const Place = ({ image }) => {
    return ( 
        <div>
            <div>
                <img src={image} alt="Desert King" />
            </div>
            <div>
                <span>
                    <p>Desert King</p>
                    <p>2345km away</p>
                    <img src={star} alt="rating" />
                </span>
                <span>
                    <p>1 MBT per night</p>
                    <p>available for 2 weeks stay</p>
                </span>
            </div>
        </div>
     );
}
 
export default Place;