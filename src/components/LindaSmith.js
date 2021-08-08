import React from 'react';


import LindaSmithJPG from '../assets/Linda Smith.jpg'


export default function mentors(props){
    function showhide(id) {
        var description = document.getElementById(id);
        description.style.display = (description.style.display == 'block') ? 'none' : 'block';
    }
    return (
        <div id = 'LindaSmith'className = 'SecMentor FEMentor'>
            <img src = {LindaSmithJPG} alt = 'portrait'></img>
            <h1 className = 'fullName'>Linda Smith</h1>
            <ul>
                <li>Security</li>
                <li>Front End</li>
            </ul>
            <button onClick = {()=>showhide('LindaSmithDescription')}>&#9660;</button> 
            <p id='LindaSmithDescription'>Hi my name is Linda Smith, and I specialize in Front-end and Security.</p>
        </div>
    );
}