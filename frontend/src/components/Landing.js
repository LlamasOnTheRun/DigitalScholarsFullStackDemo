import './../App.css';
import Account from './Account';
import NavigationBar from './NavigationBar';
import React from 'react'

function App(props) {

  function isLogin() {
    let renderedContent;
    if(props.isLogin) {
      renderedContent = (
        <React.Fragment>
          <header className="App-header">
            <Account getAccountDetails={props.getAccountDetails} updateAccountDetails={props.updateAccountDetails}/>
          </header>
        </React.Fragment>
      );
    } else {
      renderedContent = (
        <React.Fragment>
          <header className="App-header">
            <p>
              Welcome to the Landing Page of Gaming Central!
            </p>
            <p>
              Login or Create an Account to Get Started
            </p>
          </header>
        </React.Fragment>
      );
    }

    return renderedContent;
  }

  return (
    <div className="App">
      <NavigationBar/>
      {isLogin()}
    </div>
  );
}

export default App;
