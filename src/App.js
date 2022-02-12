import React, { useState } from "react";
//Components
import Header from "./components/Header";
import NotLoggedIn from "./Pages/NotLoggedIn";

// Style
import GlobalStyle from "./components/GlobalStyle";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <NotLoggedIn />

      <Footer />
    </div>
  );
}

export default App;
