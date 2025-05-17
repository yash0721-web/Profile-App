import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';

import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <nav className="bg-gray-800 p-4 text-white flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/profiles" className="hover:underline">Profiles</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
};

export default App;
