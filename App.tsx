import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import DonationForm from './pages/DonationForm';
import Payment from './pages/Payment';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Auth initialMode="login" />} />
          <Route path="/register" element={<Auth initialMode="register" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate/money" element={<Payment />} />
          <Route path="/donate/:type" element={<DonationForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
