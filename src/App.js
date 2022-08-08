import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { CheckOut } from './components/CheckOut/CheckOut';

import './App.css';

function App() {
 return (
  <div className='App'>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/checkout' element={<CheckOut />} />
   </Routes>
  </div>
 );
}

export default App;
