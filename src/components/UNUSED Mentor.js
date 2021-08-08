import React from 'react';


export default function mentors(props){
    return (
        <div id = {props.lastName} >
            <img src = {props.profile} alt = 'portrait'></img>
            <h1>{props.firstName} {props.lastName}</h1>
            <caption>{props.description}</caption>
        </div>
    );
}