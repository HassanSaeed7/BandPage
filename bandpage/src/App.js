import Home from './screens/Home'
import About from './screens/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'  
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
