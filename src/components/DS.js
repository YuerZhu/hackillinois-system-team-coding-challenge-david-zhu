import React from 'react';

export default function DS({filterToApp}){

    return (
        <li>Data Science
            <input type = 'checkbox' id = 'DS'  defaultChecked = {true} 
            onChange = {()=> filterToApp('DS')}>
            </input>
        </li>
    )
}           