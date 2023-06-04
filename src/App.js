import logo from './logo.svg';
import './App.css';

import ListadoPeliculas from './listadoPeliculas';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Blog from './blog';
import Register from './register';
import HomePage from './home';


function App() {
 
  return (

<BrowserRouter>  
<Routes>
<Route path='/lPelis' element = {<ListadoPeliculas />}/>
<Route path='/blog'  element={<Blog />}/>
<Route path='/register' element= {<Register />}/>
<Route path='/' element= {<HomePage />}/>
</Routes>
</BrowserRouter>  


  );
 
}

export default App;
