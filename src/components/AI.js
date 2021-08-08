import React from 'react';

export default function AI({filterToApp}){

    return (
        <li>Artificial Intelligence
            <input type = 'checkbox' id = 'AI' defaultChecked = {true}
            onChange = {()=> filterToApp('AI')}>
            </input>
        </li>
    )
}           