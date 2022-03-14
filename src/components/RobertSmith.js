import React from 'react';

import RobertSmithJPG from '../assets/Robert Smith.jpg'


export default function mentors(props){
    function showhide(id) {
        var description = document.getElementById(id);
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    }
    return (
        <div id = 'RobertSmith' className = 'AlgoMentor'>
            <img src = {RobertSmithJPG} alt = 'portrait'></img>
            <h1 className = 'fullName'>Robert Smith</h1>
            <ul>
                <li>Algorithm</li>
            </ul>
            <button onClick = {()=>showhide('RobertSmithDescription')}>&#9660;</button> 
            <p id='RobertSmithDescription'>Hi my name is Robert Smith, and I specialize in Algorithm.</p>
        </div>
    );
}