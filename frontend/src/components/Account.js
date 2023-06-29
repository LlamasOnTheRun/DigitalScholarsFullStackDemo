import './../css/Account.css';

function Account() {
    return (
        <div className="App">
            <div className="info-showcase">
                <div className="profile-name">
                    Ryan Llamas
                </div>
                <img className="profile-pic" src={"https://media.licdn.com/dms/image/D5603AQHlOn8FajueTA/profile-displayphoto-shrink_800_800/0/1680192157923?e=2147483647&v=beta&t=qh_uIhWM-GFppGzmx1dZPtm7kLYtzcp3J_J8FzqqHAE"}/>
            </div>
            <div className="games-showcase">
                <div class="text">
                    <div className="game-display">
                        The Elder Scrolls V: Skyrim
                    </div>
                    <div className="game-display">
                        Deep Rock Galactic
                    </div>
                    <div className="game-display">
                        The Witcher 3: Wild Hunt
                    </div>
                </div>
                <div className="choices">
                    <button className="add-game">
                        Add Game
                    </button>
                    <button className="remove-game">
                        Remove Game
                    </button>
                </div>
            </div>
        </div>
    );
}
  
export default Account;
  