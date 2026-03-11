/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EasyReads from './pages/EasyReads';
import QnA from './pages/QnA';
import Experts from './pages/Experts';
import Consultation from './pages/Consultation';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easy-reads" element={<EasyReads />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

