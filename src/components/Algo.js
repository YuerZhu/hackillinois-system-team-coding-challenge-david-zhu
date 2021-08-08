import React from 'react';

export default function Algo({filterToApp}){

    return (
        <li>Algorithm
            <input type = 'checkbox' id = 'Algo'  defaultChecked = {true} 
            onChange = {()=> filterToApp('Algo')}>
            </input>
        </li>
    )
}           