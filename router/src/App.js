import './App.css';
import {Routes,Route,NavLink} from 'react-router-dom';
// import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Notfound from './components/Notfound';
import Mainheader from './components/Mainheader';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
<nav>
  <ul>
  <li>
   <NavLink to='/'>Home</NavLink> 
    </li>
  <li><NavLink to='/about'>About</NavLink> </li>
  <li><NavLink to='/labs'>Labs</NavLink> </li>
  </ul>

</nav>



    
<Routes>
<Route path='/' element={<Mainheader />}  >
  <Route index element={<Home />} />


<Route path='/about' element={<About />}  />

<Route path='/labs' element={<Labs />}  />
<Route path='*' element={<Notfound />}  />

</Route>
  </Routes>    
  </div>
  );
}

export default App;
