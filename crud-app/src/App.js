import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Navbar } from './components/layout/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { NotFound } from './components/pages/NotFound';
import { AddUser } from './components/users/AddUser';
import { EditUser } from './components/users/EditUser';

function App() {

  const [login, setLogin] = React.useState(false);
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>

<button onClick={()=>setLogin(!login)}>{login? "logout":"login"}</button>
{console.log(login)}
<Routes>
<Route exact path="/" element={ <Home/> } />
<Route exact path="/About" element={ <About/> } />
<Route exact path="/Contact" element={ <Contact/> } />
if (login===true){
  <Route  path="/user/add" element={<AddUser/>}/>
}
else{
  <Route exact path="/user/add" element={<Home/>}/>
}
<Route exact path="/user/edit/:id" element={ <EditUser/> } />
<Route  element={<NotFound/>} />
</Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
