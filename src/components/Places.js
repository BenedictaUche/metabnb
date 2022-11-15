import React, {useState } from 'react';
import locations from '../data';
import Place from './Place';

const Places = () => {
    const [data] = useState(locations);

    const displayDatas = data.map(({id, image}) => (
        <Place key={id} image={image} />
    ))
    return ( 
        <div className='lg:grid lg:grid-cols-4 lg:gap-6'>
            {displayDatas}
        </div>
     );
}
 
export default Places;