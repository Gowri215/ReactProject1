import logo from './logo.svg';
import './App.css';
import First from './components/First';
import StateBasics from './components/StateBasics';
// import Table from './components/Table';
import ApiGet from './components/ApiGet';

import { Route, Routes } from 'react-router-dom';
import Tablex from './components/Table';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<StateBasics/>}/> 
        <Route path='/first'element={<First/>}/> 
        <Route path='/table' element={<Tablex/>}/>  
        <Route path='/axios' element={<ApiGet/>}/>
      </Routes>
   
    
    </div>
  );
}


export default App;
