import './../App.css';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <div>
          <form action="">
            <div> 
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/> 
            </div> 
            <div> 
              <label htmlFor="passw">Password</label>
              <input type="text" name="passw" id="passw"/> 
            </div>  
            <button type="submit">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
