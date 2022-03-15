import React, {useState,useEffect}from 'react';

import logo from './assets/logo.svg';
import google from './assets/google.svg'
import fb from './assets/fb.svg'
import ui from './assets/ui.png'

//I am so sorry I just realized that there is an API to call for data...
//Here are four of my fake mentors...
import JamesSmith from './components/JamesSmith'
import MarySmith from './components/MarySmith'
import LindaSmith from './components/LindaSmith'
import RobertSmith from './components/RobertSmith'

//specialization checkboxes
import AI from './components/AI'
import FE from './components/FE'
import Algo from './components/Algo'
import Sec from './components/Sec'
import DS from './components/DS'

import './App.css';


function App(props) {
  //store the filter that is being clicked(changed)
  const [UpdateFilter, setUpdateFilter] = useState('');

  //store appearing and hidden categories 
  const [filterList, setFilterList] = useState(['AI', 'FE', 'DS', 'Algo', 'Sec'])
  const [hiddenList, setHiddenList] = useState([])

  //checkboxes passes the id of the clicked checkbox to App through filterToApp()
  const filterToApp = (UpdateFilterData) => {
    setUpdateFilter(UpdateFilterData);
  }

  //App checks if the corresponding mentor divs are hidden, and updates the 'display' style
  useEffect(() => {
    if(UpdateFilter !== ''){
      if(filterList.indexOf(UpdateFilter) !== -1){
        filterList.splice(filterList.indexOf(UpdateFilter),1);
        hiddenList.push(UpdateFilter);
      }else{
        filterList.push(UpdateFilter)
        hiddenList.splice(hiddenList.indexOf(UpdateFilter),1);
      }
    }  
      for(let i = 0; i < hiddenList.length; i++){
        document.querySelector('.' + hiddenList[i] + 'Mentor').style.display = 'none';
      }
     for(let i = 0; i < filterList.length; i++){
        document.querySelector('.' + filterList[i] + 'Mentor').style.display = '';
      }
    setUpdateFilter('')
  },[UpdateFilter, filterList, hiddenList])

  return (
    <div className='App'>
      <header>
        <img src = {logo} className = 'logo' alt = 'hackIllinoisLogo' />
        <nav>
          <ul>
              <li><a>Home</a></li>
              <li><a>Mentors</a></li>
              <li><a>Prizes</a></li>
              <li><a>Schedules</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 id ='highlight' aria-hidden = 'true'>Mentors</h1>
        <div className = 'filters'>
          <ul>
            <li>Filters:</li>
            <AI filterToApp = {filterToApp}/>
            <FE filterToApp = {filterToApp}/>
            <Algo filterToApp = {filterToApp}/>
            <Sec filterToApp = {filterToApp}/>
            <DS filterToApp = {filterToApp}/>
          </ul>
          <p id = 'changing'></p>
        </div>
        <div className = 'mentors'>
          <JamesSmith />
          <MarySmith />
          <LindaSmith />
          <RobertSmith />
        </div>
        <footer>
          <div className = 'sponsors'>
            <h2>Sponsors</h2>
            <img src = {google} title = 'sponsor1' alt = 'sponsor1'></img>
            <img src = {fb} title = 'sponsor1' alt = 'sponsor2'></img>
            <img src = {ui} title = 'sponsor1' alt = 'sponsor3'></img>
          </div>
          <div className = 'contacts'>
            <h2>Contacts</h2>
            <p>Email : hackillinois.gmail.com</p>
            <p>Address: 123 Some Street, 123456</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

//I tried to run the following code in App, as well asuseFetch
//and Mentors component, but couldnt fetch anything..
//I'll try to figure out what is wrong from now until the interview..

/*
import { useFetch } from './components/useFetch;

url = 'https://api.hackillinois.org/upload/blobstore/mentors/'

const {data,error} = useFetch(url);

return(
  <div className = 'mentors'>
    {data.map((x.data) => <Mentors 
      description = {x.data.description}
      firstName = {x.data.firstName}
      lastName = {x.data.lastName}
      profile = {x.data.profile}
      )}
  </div>
)
*/
