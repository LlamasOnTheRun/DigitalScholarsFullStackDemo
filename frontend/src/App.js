import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import LandingPage from './components/Landing';
import CreateAccount from './components/CreateAccount';
import { useState } from 'react';

function App() {

    const [isLogin, setIsLogin] = useState(false);
    
    return (
    <div className="App">
        <Routes>
            <Route index element={<LandingPage isLogin={isLogin} />} />
            <Route path="create/account" element={<CreateAccount />} />
            <Route path="login" element={<Login updateLoginStatus={setIsLogin}/>} />
        </Routes>
    </div>
    );
}

export default App;
