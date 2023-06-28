import './../App.css';
import NavigationBar from './NavigationBar';
import { useState } from 'react';
import React, { Fragment } from 'react'

function App(props) {

  //const [age, setAge] = useState(28);
  //const [name, setName] = useState('Taylor');

  function isLogin() {
    let renderedContent;
    if(props.isLogin) {
      renderedContent = (
        <React.Fragment>
          <header className="App-header">
            Im Logged in
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
