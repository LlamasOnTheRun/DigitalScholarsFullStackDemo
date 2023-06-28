import './../App.css';
import './../css/CreateAccount.css';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <div>
          <form action="">
            <div> 
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName"/> 
            </div> 
            <div> 
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName"/> 
            </div> 
            <div> 
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/> 
            </div> 
            <div> 
              <label htmlFor="passw">Password</label>
              <input type="text" name="passw" id="passw"/> 
            </div>  
            <button type="submit">Create Account</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
