import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';

export const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    <Footer />,
  </>
);
