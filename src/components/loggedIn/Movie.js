import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../../assects/Logged_In/netflix-logo-small.svg'

const Movie = ({ movie }) => {
  return (
    <StyleMovie>
        <h4>{movie.title}</h4>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    </StyleMovie>
  )
}
const StyleMovie = styled(motion.div)`
    //width: 200px;
    color: white;
    position: relative;
    h4 {
        font-size: 0.8em;
        position: absolute;
        top: 0;
        width: 100%;
        height: 3em;
        padding: 5px 10px;
        background: rgba(0, 0, 0, 0.4);
    }
    .logo {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2em;
    }
`

export default Movie