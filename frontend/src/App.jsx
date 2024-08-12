// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthWrapper from './features/auth/AuthWrapper/AuthWrapper';

const App = () => {
  return (
    <div className=' bg-home/80'>

    <Router>
      <AuthWrapper />
    </Router>
    </div>
  );
};

export default App;
