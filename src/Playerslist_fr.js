import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.js';

export class Players_Fr extends React.Component {
render() {
    const playersFr = [
    {
      index : "0",
      surname : "Soon",
      name : "Terence Tarlier",
      team : "Valliant",
      main : "DPS",
      photo : "https://bnetcmsus-a.akamaihd.net/cms/page_media/E29MO86JEHJD1512776701352.png",
      description : "blabla"
    },
    {
      index : "1",
      surname : "Bunny",
      name : "Jun-Hyeok Chae",
      team : "Valliant",
      main : "DPS",
      photo : "https://bnetcmsus-a.akamaihd.net/cms/page_media/5UTQTAH91AP81523496424343.png",
      description : "blabla"
    },
    {
      index : "2",
      surname : "KSF",
      name : "Kyle Frandanisa",
      team : "Valliant",
      main : "DPS",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/sq/SQ26X07IYE2M1524801717474.png",
      description : "blabla"
    },
    {
      index : "3",
      surname : "Agilities",
      name : "Brady Girardi",
      team : "Valliant",
      main : "DPS",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/47PKEMP7FWAQ1512776700755.png",
      description : "blabla"
    },
    {
      index : "4",
      surname : "Custa",
      name : "Scott Kennedy",
      team : "Valliant",
      main : "Healer",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/gallery/5BKHVJ9PGEFR1522979605000.png",
      description : "blabla"
    },
    {
      index : "5",
      surname : "Fate",
      name : "Pan-Seung Koo",
      team : "Valliant",
      main : "Tank",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/3SWJQYWMYTV11512776700780.png",
      description : "blabla"
    },
    {
      index : "6",
      surname : "Izayaki",
      name : "Minchul Kim",
      team : "Valliant",
      main : "Flexible",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/JPTPX2S7UOZY1526600595484.png",
      description : "blabla"
    },
    {
      index : "7",
      surname : "Kariv",
      name : "Young-Seo Park",
      team : "Valliant",
      main : "Flexible",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/6QOV26CVECXE1512776701055.png",
      description : "blabla"
    },
    {
      index : "8",
      surname : "Space",
      name : "Indy Halpern",
      team : "Valliant",
      main : "Flexible",
      photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/BP0XDXDMWZ421512776701354.png",
      description : "blabla"
    },
  ];


  // list players excerpt
console.log(playersFr);
  return (
       <ul>
         {playersFr.map(player => (
           <li key={player.index} id={player.surname} className="players_section">

      {  /*   <img
           src={player.photo}
           alt={player.surname}
           width="100px"
           height="100px" /> */}

            <h2 className="title">{player.surname}</h2>
            <p className="name">{player.name}</p>
            <p className="subtitle">{player.team} - {player.main}</p>
            <hr></hr>
           </li>
         ))}
       </ul>
     );
};
}


export default Players_Fr;
