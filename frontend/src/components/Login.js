import './../App.css';
import NavigationBar from './NavigationBar';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function getAccountDetais(event) {
    event.preventDefault();
    console.log(email)
    // This HTTP request is logging into a account
    axios({
      method: 'get',
      url: 'http://localhost:8080/login', 
      // I am passing data in this request
      params: {
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
      if(response.data) {
        // I update my applications state to:
        // A: Save Account Details such as games and users name
        // B: Inform the application someone has logged in
        props.updateAccountDetails(response.data);
        props.updateLoginStatus(true);
      }
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <div>
          <form onSubmit={(e) => getAccountDetais(e)}>
            <div> 
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/> 
            </div> 
            <div> 
              <label htmlFor="passw">Password</label>
              <input type="text" name="passw" id="passw" onChange={(e) => setPassword(e.target.value)}/> 
            </div>  
            <button type="submit">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
