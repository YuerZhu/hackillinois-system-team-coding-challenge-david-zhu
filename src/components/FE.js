import React from 'react';

export default function FE({filterToApp}){

    return (
        <li>Front End
            <input type = 'checkbox' id = 'FE'  defaultChecked = {true} 
            onChange = {()=> filterToApp('FE')}>
            </input>
        </li>
    )
}           