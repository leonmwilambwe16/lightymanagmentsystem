import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import MainLayout from "./Layout/MainLayout";
import ProtectedLayout from "./Layout/ProtectedLayout";
import CreateTasks from "./Pages/CreateTasks";
import ManagmentTasks from "./Pages/ManagmentTasks";

function App() {
  return (
    <Routes>
   
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-in"
          element={<SignIn routing="path" path="/sign-in" afterSignInUrl="/dashboard" />}
        />
        <Route
          path="/sign-up"
          element={<SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />}
        />
      </Route>

  
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="manager" element={<ManagmentTasks/>} />
        <Route path="profile" element={<CreateTasks/>} />
      </Route>
    </Routes>
  );
}

export default App;


