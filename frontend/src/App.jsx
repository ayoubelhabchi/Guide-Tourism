// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthWrapper from './features/auth/AuthWrapper/AuthWrapper'; // Import the new wrapper component

const App = () => {
  return (
    <Router>
      <AuthWrapper />
    </Router>
  );
};

export default App;
