import React from 'react';


import MarySmithJPG from '../assets/Mary Smith.jpg'


export default function mentors(props){
    function showhide(id) {
        var description = document.getElementById(id);
        description.style.display = (description.style.display == 'block') ? 'none' : 'block';
    }
    return (
        <div id = 'MarySmith' className = 'AIMentor SecMentor'>
            <img src = {MarySmithJPG} alt = 'portrait'></img>
            <h1 className = 'fullName'>Mary Smith</h1>
            <ul>
                <li>Artificial Intelligence</li>
                <li>Security</li>
            </ul>
            <button onClick = {()=>showhide('MarySmithDescription')}>&#9660;</button> 
            <p id='MarySmithDescription'>Hi my name is Mary Smith, and I specialize in AI and Security.</p>
        </div>
    );
}