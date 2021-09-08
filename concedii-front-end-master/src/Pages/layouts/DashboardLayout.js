import React from "react";
import Header from "../../components/layout/Page/Header";
import Footer from "../../components/layout/Page/Footer";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
};

export default DashboardLayout;
