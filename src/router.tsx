import React, { Suspense, useEffect } from 'react';
import { RouteProps } from 'react-router'
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import AppLayout from './layouts';
import ConnectWallet from 'pages/connect-wallet';

function MainRouter() {

  return (
    <Router>
      <Routes>
          {/* <Route path="/" element={<Navigate to="/active-event" />} /> */}
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
