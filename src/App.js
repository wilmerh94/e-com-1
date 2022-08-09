import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';

import './App.css';
import { Home } from './pages/Home/Home';
import { CheckOut } from './pages/Checkout/CheckOut';
import Login from './pages/Login/Login';

function App() {
 return (
  <div className='App'>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/checkout' element={<CheckOut />} />
    <Route path='/login' element={<Login />} />
   </Routes>
  </div>
 );
}

export default App;
