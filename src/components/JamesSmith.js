import React from 'react';

import JamesSmithJPG from '../assets/James Smith.jpg'

export default function mentors(props){
    function showhide(id) {
        var description = document.getElementById(id);
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    }

    return (
        <div id = 'JamesSmith' className = 'AIMentor DSMentor'>
            <img src = {JamesSmithJPG} alt = 'portrait'></img>
            <h1 className = 'fullName'>James Smith</h1>
            <ul>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
            </ul>
            <button onClick = {()=>showhide('JamesSmithDescription')}>&#9660;</button> 
            <p id='JamesSmithDescription'>Hi my name is James Smith, and I specialize in AI and Data Science.</p>
        </div>
    );    
}