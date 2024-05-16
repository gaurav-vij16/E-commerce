import React from 'react';
import Navbar from './components/Navbar';
import { Route , Routes} from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import './App.css';



function App() {
  return (
    <div>

    <div className=' bg-slate-900'>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </div>
  );
}

export default App;
