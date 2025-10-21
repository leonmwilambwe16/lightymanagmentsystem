import React from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">{children}</main>
    </div>
  );
};

export default DashboardLayout;
