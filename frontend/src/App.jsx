// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthWrapper from './features/auth/AuthWrapper/AuthWrapper';

const App = () => {
  return (
    <Router>
      <AuthWrapper />
    </Router>
  );
};

export default App;
