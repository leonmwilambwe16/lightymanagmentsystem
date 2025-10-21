import React from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";

const ProtectedLayout = () => {
  return (
    <>
      <SignedIn>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </SignedIn>
      <SignedOut>
        <Navigate to="/" replace />
      </SignedOut>
    </>
  );
};

export default ProtectedLayout;
