import React from 'react'
// Style
import styled from 'styled-components'
import { styleVar } from '../../styleVar'
// Animation
import { motion } from 'framer-motion'
import { movieItem } from '../../animations'
// Images
import logo from '../../assects/Logged_In/netflix-logo-small.svg'

const Movie = ({ movie, handleDetail, position }) => {
    
    const handleId = (id) => {
        handleDetail(id)
    }

  return (
    <StyleMovie variants={movieItem} onClick={() => handleId(movie.id)} style={{right: position + "em"}} >
    
        <motion.img whileHover={{ scale: 1.08 }} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width="300px" height="450px" />
        <div className="logo">
            <motion.img src={logo} alt="logo" title={movie.id} />
        </div>
           
    </StyleMovie>
  )
}
const StyleMovie = styled(motion.div)`
    min-width: 10em;
    height: 16em;
    margin: 0 0.3em;
    position: relative;
    transition: ${styleVar.transition};
    overflow: hidden;
    border-radius: 0.3em;
    cursor: pointer;
    @media (max-width: 550px) {
        min-width: 6.25em;
        height: 10em;
    }
    
    img {
        width: 100%;
        height: 100%;
        
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