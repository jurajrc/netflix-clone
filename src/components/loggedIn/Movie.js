import React from 'react'
import styled from 'styled-components'
import logo from '../../assects/Logged_In/netflix-logo-small.svg'
import { motion } from 'framer-motion'
import { movieItem } from '../../animations'

const Movie = ({ movie, handleDetail }) => {
    

    const handleId = (id) => {
        handleDetail(id)
    }

    

  return (
    <StyleMovie variants={movieItem} onClick={() => handleId(movie.id)} >
    
        <motion.img whileHover={{ scale: 1.1 }} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width="300px" height="450px" />
        <div className="logo">
            <motion.img src={logo} alt="logo" title={movie.id} />
        </div>
           
    </StyleMovie>
  )
}
const StyleMovie = styled(motion.div)`
    //width: 150px;
    //height: auto;
    color: white;
    position: relative;
    cursor: pointer;
    
    
    img {
        border-radius: 0.3em;
        object-fit: cover;
    }

    .logo {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2em;
        img {
            width: 100%;
            height: 100%;
        }
        @media (max-width: 550px) {
            width: 1.5em;
        }
    }
`

export default Movie