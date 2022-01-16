import React, { Suspense, useEffect } from 'react';
import './assets/scss/index.scss'
import MainRouter from 'router';

function App() {
  return (
    <div className="co-mainwrap">
      <MainRouter />
    </div>
  );
}

export default App;
