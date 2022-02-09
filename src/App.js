import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ShopPage from './Pages/Shop/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/shop" element= {<ShopPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
