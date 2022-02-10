import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/shop" element= {<ShopPage/>}/>
        <Route path="/signin" element= {<SignInAndSignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
