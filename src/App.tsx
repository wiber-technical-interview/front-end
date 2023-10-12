import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import CreateScript from './pages/createScript/createScript';
import UpdateScript from './pages/updateScript/updateScript';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createScript" element={<CreateScript />} />
        <Route path="/updateScript" element={<UpdateScript />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
