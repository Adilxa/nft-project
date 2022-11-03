import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Login from "./components/Login/Login";
import MoreAbout from './components/moreAbout/MoreAbout';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:address/:id' element={<MoreAbout />} />
          <Route path='*' element={<h1>404</h1>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
