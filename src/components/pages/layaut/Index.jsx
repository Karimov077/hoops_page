import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../../headers/Headers';
import Footer from '../../footer/Footer';

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Headers />

      {/* Main content */}
      <main className="flex-grow py-10 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
