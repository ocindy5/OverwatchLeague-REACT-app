import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.js';
import './App.css';
import {PanelGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


export class Players_Fr extends React.Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '1'
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const playersFr = [
      {
        index : "0",
        surname : "Soon",
        name : "Terence Tarlier",
        team : "img/Valliant.png",
        main : "img/DPS.png",
        country : "img/France.png",
        photo : "https://bnetcmsus-a.akamaihd.net/cms/page_media/E29MO86JEHJD1512776701352.png",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },
      {
        index : "1",
        surname : "Bunny",
        name : "Jun-Hyeok Chae",
        team : "img/Valliant.png",
        main : "img/DPS.png",
        country : "img/south-korea.png",
        photo : "https://bnetcmsus-a.akamaihd.net/cms/page_media/5UTQTAH91AP81523496424343.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },
      {
        index : "2",
        surname : "KSF",
        name : "Kyle Frandanisa",
        team : "img/Valliant.png",
        main : "img/DPS.png",
        country : "img/us.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/sq/SQ26X07IYE2M1524801717474.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },
      {
        index : "3",
        surname : "Agilities",
        name : "Brady Girardi",
        team : "img/Valliant.png",
        main : "img/tank.png",
        country : "img/canada.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/47PKEMP7FWAQ1512776700755.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },

      {
        index : "5",
        surname : "Fate",
        name : "Pan-Seung Koo",
        team : "img/Valliant.png",
        main : "img/tank.png",
        country : "img/south-korea.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/3SWJQYWMYTV11512776700780.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },

      {
        index : "8",
        surname : "Space",
        name : "Indy Halpern",
        team : "img/Valliant.png",
        main : "img/tank.png",
        country : "img/us.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/BP0XDXDMWZ421512776701354.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },

      {
        index : "4",
        surname : "Custa",
        name : "Scott Kennedy",
        team : "img/Valliant.png",
        main : "img/heal.png",
        country : "img/australia.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/gallery/5BKHVJ9PGEFR1522979605000.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },

      {
        index : "6",
        surname : "Izayaki",
        name : "Minchul Kim",
        team : "img/Valliant.png",
        main : "img/heal.png",
        country : "img/south-korea.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/JPTPX2S7UOZY1526600595484.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      },
      {
        index : "7",
        surname : "Kariv",
        name : "Young-Seo Park",
        team : "img/Valliant.png",
        main : "img/heal.png",
        country : "img/south-korea.png",
        photo :"https://bnetcmsus-a.akamaihd.net/cms/page_media/6QOV26CVECXE1512776701055.png",
        description :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }

    ];

    return (
      playersFr.map(player => (
        <PanelGroup accordion id="accordion">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle class="title">{player.surname} <br />{player.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <Grid>
                <Row>
                  <Col xs={5} md={6} id="infos">

                  <Image src={player.country}
                        height='30px'
                        width='30px' id="flag"/>

                  <Image src={player.team}
                        height='50px'
                        width='50px' id='team'/>

                    <Image  src={player.photo}
                        height='300px'
                        width='300px' id="player" circle />
                  </Col>
                  </Row>
                  <Row>
                    <Col xs={5} md={4} id="line">

                      <Image src={player.main}
                            height='50px'
                            width='50px' id='main'/>

                    </Col>
                  </Row>
                  <Row>
                  <Col xs={5} md={6} id="desc">
                    {player.description}
                  </Col>
                </Row>
              </Grid>
            </Panel.Body>
          </Panel>
        </PanelGroup>
      ))
    );
  }
}
