import React from 'react';
import metatask from '../imgs/metatask.png';
import mbtoken from '../imgs/mbtoken.png';
import opensea from '../imgs/opensea.png';
const Sponsors = () => {
    return ( 
        <div>
            <span>
                <img src={mbtoken} alt="mbtoken" />
            </span>
            <span>
                <img src={metatask} alt="metatask" />
            </span>
            <span>
                <img src={opensea} alt="opensea" />
            </span>
        </div>
     );
}
 
export default Sponsors;