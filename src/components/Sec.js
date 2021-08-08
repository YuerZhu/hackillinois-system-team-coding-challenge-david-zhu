import React from 'react';

export default function Sec({filterToApp}){

    return (
        <li>Security
            <input type = 'checkbox' id = 'Sec'  defaultChecked = {true} 
            onChange = {()=> filterToApp('Sec')}>
            </input>
        </li>
    )
}           