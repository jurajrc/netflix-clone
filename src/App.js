import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import NotLoggedIn from "./Pages/NotLoggedIn";
import LoginForm from "./Pages/LoginForm";
import LoggedIn from "./Pages/LoggedIn";
import Footer from "./components/Footer";
import { SEARCH_API, POPULAR_API, searchMovieURL } from "./api";

// Style
import GlobalStyle from "./components/GlobalStyle";


function App() {
  const [loggeding, setLoggeding] = useState(true)
  const [popular, setPopular] = useState([])
  const [error, setError] = useState(false)
  const [ok, setOk] = useState(false)
  const [imageBack, setImageBack] = useState("/dK12GIdhGP6NPGFssK2Fh265jyr.jpg")
  const [randomId, setRandomId] = useState([])
  const [detailMovie, setDetailMovie] = useState(null)
 
  //const [filtered, setFiltered] = useState([])
  //const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular()
    setLoggeding(true)
    pushRandom()
  }, [])

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  // načitať 10 nahodných filmo
  const pushRandom = () => {
    const array = []
    for( var i = 0; i < 10; i++ ) {
      const number = randomIntFromInterval(1, 939616)
      array.push(number)

    }
    setRandomId(array)
    console.log(array);
  }

  // change image background
  const changeImage = () => {
    setTimeout(() => {
      setImageBack(popular[0].backdrop_path)
    }, 750);
  }

  const getMovies = async (api) => {
    const data = await fetch( api );
    const movies = await data.json()

    // checke, is image backdrop_path && poster_path
    const filter = movies.results.filter(movie => 
      movie.backdrop_path !== null && 
      movie.poster_path !== null)

    // max length array movies 10
    const sliceMovies = filter.slice(0, 10)
    setPopular(sliceMovies)
  }

  // local Database Users
  const userAdmin = {
    email: "netflix@test.sk",
    password: "1122"
  }

  const Login = (details) => {
    
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

  // get data popular
  const fetchPopular = async () => {
    getMovies(POPULAR_API)
  }

  // get data search
  const searchMovie = async (searchTerm) => {
    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
    }
    setDetailMovie(null)
  }

  const handleDetail = async (id) => {
    console.log(id);
    const data = await fetch( searchMovieURL(id) );
    const detailMovie = await data.json()
    console.log(detailMovie);
    setDetailMovie(detailMovie)

    // change image for detail
    setTimeout(() => {
      setImageBack(detailMovie.backdrop_path)
    }, 500);

    // scroll to top after click movie 
    window.scroll({
      top: '150px',
      left: 0,
      bahavior: 'auto'
  })
  }

  return (
    <div className="App">
      <GlobalStyle />

      {loggeding ? 
        <Header toggle={setLoggeding} ok={ok} setOk={setOk} searchMovie={searchMovie}/> :
         null 
      }
      
      <Routes>
        <Route path="/" element={ <NotLoggedIn setLoggeding={setLoggeding} /> } />
        <Route path="/login" element={ <LoginForm toggle={setLoggeding} Login={Login} error={error} ok={ok} /> } />
        <Route path="/logged-in" element={ <LoggedIn 
          popular={popular} 
          changeImage={changeImage}
          setOk={setOk} 
          imageBack={imageBack}
          handleDetail={handleDetail}
          detailMovie={detailMovie}
          setDetailMovie={setDetailMovie}
        /> } />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
