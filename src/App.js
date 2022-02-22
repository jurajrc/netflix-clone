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
  //const [randomId, setRandomId] = useState([])
  const [randomMovies, setRandomMovies] = useState([])
  const [detailMovie, setDetailMovie] = useState(null)
  const [placeholderMovies, setPlaceholderMovies] = useState("Popular")
  const [loading, setLoading] = useState(false)
 
  //const [filtered, setFiltered] = useState([])
  //const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    setPlaceholderMovies("Popular")
    fetchPopular()
    //setLoggeding(true)
    //pushRandom()
    //fetchRandomMovie()
  }, [])

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  ///// načitať 10 nahodných filmo
  // const pushRandom = () => {
  //   const array = []
  //   for( var i = 0; i < 10; i++ ) {
  //     const number = randomIntFromInterval(1, 939616)
  //     array.push(number)
  //   }
  //   setRandomId(array)
  //   console.log(array);
  // }

///////////////  TEST random 
///////////////////////////////////

  const fetchRandomMovie = async () => {
    setLoading(true)
    const array = []

    for( let i = 0; array.length < 10; i++ ) {
      const randomNumber = randomIntFromInterval(1, 939616)
      const movie = await getOne(randomNumber)

      if(movie.backdrop_path !== null && movie.poster_path !== null && movie.status_code !== 34) {
        console.log(i);
        array.push(movie);
      }
    }

    setRandomMovies(array)
    setPopular(array)
    setPlaceholderMovies("Random")
    setLoading(false)
  }

  //////////////////////////////////////

  /**
   * 
   * @param {randomNumber} id 
   * @returns object one movie
   */
  const getOne = async (id) => {
    const data = await fetch( searchMovieURL(id) );
    const movie = await data.json()
    return movie  
  }

  
  /**
   * change image background with timeout
   */
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

  
  /**
   * fech popular movies
   */
  const fetchPopular = async () => {
    getMovies(POPULAR_API)
  }

  // get data search

  /**
   * 
   * @param {string} searchTerm 
   */
  const searchMovie = async (searchTerm) => {
    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setPlaceholderMovies("Found")
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
          placeholderMovies={placeholderMovies}
          loading={loading}
        /> } />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
