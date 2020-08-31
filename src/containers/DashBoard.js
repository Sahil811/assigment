import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Features from "../components/Features/Features";

function DashBoard() {
  return (
    <div className="dashboard">
      <Header />
      <main>
        <Menu />
        <Features />
      </main>
    </div>
  );
}

export default DashBoard;
