import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import WatchPage from "./pages/WatchPage"
import SearchPage from "./pages/SearchPage"
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import HistoryPage from "./pages/HistoryPage";
import NotFoundPage from "./pages/NotFoundPage";
const App = () => {
  const { user, checkAuth, isCheckAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckAuth) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader size={50} className="animate-spin text-fuchsia-500" />
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        />

        <Route
          path="/watch/:id"
          element={user ? <WatchPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/search"
          element={user ? <SearchPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/history"
          element={user ? <HistoryPage /> : <Navigate to={"/login"} />}
        />

        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
      <Footer />

      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
