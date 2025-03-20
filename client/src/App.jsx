import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Vote from './page/Vote';
import Dashboard from './page/Dashboard';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vote' element={<Vote />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}