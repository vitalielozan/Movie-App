import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MainLayout() {
  return (
    <div
      className="flex min-h-screen flex-col gap-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
      data-theme="forest"
    >
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
