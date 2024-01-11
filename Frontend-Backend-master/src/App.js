import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Term from './components/pages/Services';



function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route> 
     
      <Route path='/Services' element={<Term />}></Route>
    </Routes>
    </Router>
    
    </>
     
    
  );
}

export default App;
