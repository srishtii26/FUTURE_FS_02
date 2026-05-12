import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Analytics from "./pages/Analytics";

import Clients from "./pages/Clients";

import Reports from "./pages/Reports";

import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import ProtectedRoute from "./components/ProtectedRoute";
import Pipeline from "./pages/Pipeline";
import "./App.css";
import Tasks from "./pages/Tasks";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] =
  useState(false);
const toggleTheme = () => {

  setDarkMode(!darkMode);

};
  return (
    <div
    className={
      darkMode
        ? "dark-theme"
        : ""
    }
  >

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
  path="/"
  element={
    <ProtectedRoute>

      <Dashboard
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

    </ProtectedRoute>
  }
/>

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clients"
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        /><Route
    path="/tasks"
    element={
      <ProtectedRoute>
        <Tasks />
      </ProtectedRoute>
    }
  />
<Route
  path="/pipeline"
  element={
    <ProtectedRoute>
      <Pipeline />
    </ProtectedRoute>
  }
/>
<Route
  path="/calendar"
  element={
    <ProtectedRoute>
      <Calendar />
    </ProtectedRoute>
  }
/>
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
</div>
  );
}

export default App;