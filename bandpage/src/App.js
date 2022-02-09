import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'  
import Home from './screens/Home'
import About from './screens/About'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route exact element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
