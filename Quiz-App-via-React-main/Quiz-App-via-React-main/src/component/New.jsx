import React,{useState} from 'react';
import off from '../images/off.jpg';
import on from '../images/on.jpg';


export const New = () => {
    const [{off},setst] = useState(true);

    return (
        <div>
            {onclick = () => ({off} ? {on} : {off})
            
            }
        </div>
    )
}
