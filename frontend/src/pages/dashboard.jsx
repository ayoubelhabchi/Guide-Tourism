import React from 'react';
import Sidebar from '../components/dashboardGuides/sideBar';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/dashboardGuides/topBar';

function Dashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar className="w-full" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="" />
        <main className="flex-1 px-6 overflow-x-auto overflow-y-hidden pb-4 pt-2 bg-slate-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
