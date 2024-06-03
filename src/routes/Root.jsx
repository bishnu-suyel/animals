import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto text-center my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
