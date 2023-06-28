import './../css/Navigation.css';
import { Link } from 'react-router-dom'

function NavigationBar() {
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create/account">Create Account</Link></li>
      <li><a href="/login">Login</a></li>
    </ul>
  );
}

export default NavigationBar;