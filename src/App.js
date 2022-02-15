import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import NotLoggedIn from "./Pages/NotLoggedIn";
import LoginForm from "./Pages/LoginForm";
import LoggedIn from "./Pages/LoggedIn";
import Footer from "./components/Footer";

// Style
import GlobalStyle from "./components/GlobalStyle";


function App() {
  const [loggeding, setLoggeding] = useState(true)
  const [popular, setPopular] = useState([])
  const [error, setError] = useState(false)
  const [ok, setOk] = useState(false)
 
  //const [filtered, setFiltered] = useState([])
  //const [activeGenre, setActiveGenre] = useState(0)

  const API_KEY = "5a6f37a02377fadf0e6bfa71a67137ac"
  

  useEffect(() => {
    fetchPopular()
  }, [])

  // local Database Users
  const userAdmin = {
    email: "netflix@test.sk",
    password: "1122"
  }

  const Login = (details) => {
    console.log(details);
    
    if(details.email === userAdmin.email && details.password === userAdmin.password) {
        console.log('loged In - Prihlásený');
        setError(false)
        setOk(true)
      } else {
        console.log('Logout - Neprihlásený');
        setError(true)
        setOk(false)
      }
    }

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-ýUS&page=1`
    );
    const movies = await data.json()
    console.log(movies.results);
    setPopular(movies.results)
    //setFitered(movies.results)

  }

  return (
    <div className="App">
      <GlobalStyle />

      {loggeding ? <Header toggle={setLoggeding} ok={ok} /> : null }
      
      <Routes>
        <Route path="/" element={ <NotLoggedIn /> } />
        <Route path="/login" element={ <LoginForm toggle={setLoggeding} Login={Login} error={error} ok={ok} /> } />
        <Route path="/logged-in" element={ <LoggedIn popular={popular} /> } />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
