import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Community from './pages/Community';
import Shop from './pages/Shop';
import Competition from './pages/Competition';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/community" element={<Community />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/competition" element={<Competition />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;