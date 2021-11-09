import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element="Welcome Hello" />
        <Route path="/greeting" element={< Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
