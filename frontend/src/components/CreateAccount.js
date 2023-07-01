import './../App.css';
import './../css/CreateAccount.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  function createAccount(event) {
    event.preventDefault();
    console.log(email)
    axios({
      method: 'post',
      url: 'http://localhost:8080/create/account', 
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
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
  }

  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <div>
          <form onSubmit={(e) => createAccount(e)}>
            <div> 
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)}/> 
            </div> 
            <div> 
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)}/> 
            </div> 
            <div> 
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/> 
            </div> 
            <div> 
              <label htmlFor="passw">Password</label>
              <input type="text" name="passw" id="passw" onChange={(e) => setPassword(e.target.value)}/> 
            </div>  
            <button type="submit">Create Account</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
