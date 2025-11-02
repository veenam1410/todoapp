import { AnimatePresence } from 'framer-motion';
import Add from './Add';
import './App.css';
import Home from './Home';
import MyProfile from './MyProfile';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';


function App() {

  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <NavBar/>
      <AnimatePresence mode="wait">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add showModal={showModal} setShowModal={setShowModal}/>} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
