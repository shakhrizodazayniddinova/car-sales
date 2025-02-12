import React from 'react';
import Aside from './Aside';
import Header from './Header';

export default function AdminDashboard({ children }) {
  return (
    <div className="flex h-screen">
      {/* Aside - left menyu */}
      <aside className="w-[340px] bg-white">
        <Aside />
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* header */}
        <Header />
        
        {/* main */}
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
