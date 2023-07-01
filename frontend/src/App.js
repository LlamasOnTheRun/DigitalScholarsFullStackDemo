import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import LandingPage from './components/Landing';
import CreateAccount from './components/CreateAccount';
import { useState } from 'react';

function App() {

    const [isLogin, setIsLogin] = useState(false);
    const [accountDetails, setAccountDetails] = useState();
    
    return (
    <div className="App">
        <Routes>
            <Route index element={<LandingPage isLogin={isLogin} getAccountDetails={accountDetails} updateAccountDetails={setAccountDetails}/>} />
            <Route path="create/account" element={<CreateAccount />} />
            <Route path="login" element={<Login updateAccountDetails={setAccountDetails} updateLoginStatus={setIsLogin}/>} />
        </Routes>
    </div>
    );
}

export default App;
