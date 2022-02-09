import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HatsPage = () => {
  return ( 
    <div>
      <h1>HATS PAGE</h1>
    </div>
   );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/hats" element= {<HatsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
