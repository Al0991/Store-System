import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegPage from './components/RegPage'
import ConsumerHome from './components/ConsumerHome'
import AdminHome from './components/AdminHome'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/RegPage" element={<RegPage />} />
            <Route path="/ConsumerHome" element={<ConsumerHome />} />
            <Route path="/AdminHome" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
