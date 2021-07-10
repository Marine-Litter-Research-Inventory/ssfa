import React from "react";
import Navbar from "components/Navigation Bar/Navbar";
import Footer from 'components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}