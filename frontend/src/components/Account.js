import './../css/Account.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Account(props) {

    const [game, setGame] = useState();

    function updateDetails() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/login', 
            params: {
                email: props.getAccountDetails.email,
                password: props.getAccountDetails.password
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then((response) => {
            console.log(response);
            if(response.data) {
                props.updateAccountDetails(response.data);
            }
        }, (error) => {
            console.log(error);
        });
    }

    async function addGame(event) {
        event.preventDefault();
        // This HTTP requests goes ahead and adds a game
        await axios({
          // This is called the HTTP method
          method: 'post',
          // Notice it is calling localhost on 8080 with
          // a URI of "/add/game"
          url: 'http://localhost:8080/add/game', 
          data: {
            email: props.getAccountDetails.email,
            gameName: game
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type',
            'Access-Control-Allow-Credentials': 'true'
          }
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        updateDetails();
    }

    async function removeGame() {
        console.log("Removing Game")
        // This HTTP requests goes ahead and removes a game
        await axios({
          method: 'delete',
          url: 'http://localhost:8080/remove/game',
          data: {
            email: props.getAccountDetails.email
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type',
            'Access-Control-Allow-Credentials': 'true'
          }
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        updateDetails();
    }

    function renderGameShowcase() {
        console.log(props.getAccountDetails.games)
        let games = props.getAccountDetails.games.slice(0, 3);
        console.log("games!");
        console.log(games);
        const listItems = games.map((g) => <div className="game-display">{g.gameName}</div>);
        console.log(listItems)
        return listItems;
    }

    return (
        <div className="App">
            <div className="info-showcase">
                <div className="profile-name">
                    {props.getAccountDetails.firstName + " " + props.getAccountDetails.lastName}
                </div>
                <img className="profile-pic" src={"https://media.licdn.com/dms/image/D5603AQHlOn8FajueTA/profile-displayphoto-shrink_800_800/0/1680192157923?e=2147483647&v=beta&t=qh_uIhWM-GFppGzmx1dZPtm7kLYtzcp3J_J8FzqqHAE"}/>
            </div>
            <div className="games-showcase">
                <div className="text">
                    {renderGameShowcase()}
                </div>
                <div className="choices">
                    <button className="add-game" onClick={(e) => addGame(e)}>
                        Add Game
                    </button>
                    <input className="game-text" onChange={(e) => setGame(e.target.value)}/>
                    <button className="remove-game" onClick={(e) => removeGame(e.target.value)}>
                        Remove Game
                    </button>
                </div>
            </div>
        </div>
    );
}
  
export default Account;
  