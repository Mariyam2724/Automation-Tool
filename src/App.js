import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Header from './component/Header';
import Home from './component/Home';
import SheetHandler from './component/SheetHandler';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>


       <Route element = { <Home></Home>} path="/"/>
        <Route element = { <Home></Home>} path="/homepage"/> 
      <Route element = { <Login></Login>} path="/loginpage"/>
      <Route element={ <Register></Register>} path='/signup'/>
      <Route element={ <SheetHandler></SheetHandler>} path='/sheet'/>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
