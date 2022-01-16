import React, { Suspense, useEffect } from 'react';
import { RouteProps } from 'react-router'
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import AppLayout from './layouts';

function MainRouter() {

  return (
    <Router>
      <Routes>
          <Route path="*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;