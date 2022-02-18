import React, { useEffect } from 'react'
// Component
import ScrollTop from '../components/ScrollTop'
import Movie from '../components/loggedIn/Movie'
// Stale
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
// Animation
import { motion, AnimatePresence } from 'framer-motion'
import { containerMovies, detailMovieAnime } from '../animations'
import AliceCarousel from 'react-alice-carousel'
// Image
import closeSVG from '../assects/Logged_In/close-130px.svg'

const LoggedIn = ({ 
    popular, 
    setOk, 
    imageBack, 
    changeImage,
     handleDetail, 
     detailMovie,
     setDetailMovie
}) => {

    useEffect(() => {
      setOk(true)
    }, [])

    useEffect(() => {
        changeImage()
    }, [popular])

    const handleDragStart = (e) => e.preventDefault();

    const items = popular.map(movie => (
        <Movie 
            key={movie.id}
            movie={movie} 
            handleDetail={handleDetail} 
            onDragStart={handleDragStart}
            role="presentation"
        />
    ))

    // carousel
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1028: { items: 5 }
    }
    const stagePadding = { 
        paddingLeft : 10 ,      // v pixeloch 
        paddingRight : 10 
    }

  return (
    <StyleArticle>
        <img className='image-back' src={`https://image.tmdb.org/t/p/original${imageBack}`} alt="img" />
        <AnimatePresence>
            {detailMovie && (
                <motion.div 
                    className="detail-movie"
                    variants={detailMovieAnime}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <img className='small-image' src={`https://image.tmdb.org/t/p/w500${imageBack}`} alt="image" />
                    <div className="movie-title">
                        <h1>{detailMovie.title} - {detailMovie.release_date.slice(0,4)}</h1>
                        <h4>Žáner: {detailMovie.genres.map(g => (<span key={g.id}> {g.name},</span>))}</h4>
                        <div className="one-row">
                            <h2>{detailMovie.vote_average * 10}%</h2>
                            <h3>{detailMovie.runtime}min</h3>
                        </div>
                        <p>Premiéra: {detailMovie.release_date.replaceAll('-', '/')}</p>
                        
                        <p className='description'>{detailMovie.overview}</p>
                    </div>
                    <motion.img whileHover={{ rotate: -90 }} src={closeSVG} alt="close" className='close' onClick={() => setDetailMovie(null)} />
                    
                </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {popular && (
                <motion.div 
                    className={`movies ${detailMovie ? "not-up" : ""}`}
                    variants={containerMovies}
                    initial="hidden"
                    animate="show"
                >
                    {popular.map(movie => (
                        <Movie key={movie.id} movie={movie} handleDetail={handleDetail} />
                    ))}

                    {/* <AliceCarousel 
                        mouseTracking
                        items={items}
                        //responsive={responsive}
                        stagePadding={stagePadding}
                        disableButtonsControls
                        keyboardNavigation
                        controlsStrategy='alternate'
                        autoWidth
                        showArrows={true}
                    /> */}

                    
                </motion.div>
            )}
        </AnimatePresence>
        <ScrollTop />
    </StyleArticle>
  )
}
const StyleArticle = styled.article`
    width: 100%;
    min-height: 60vh;
    position: relative;

    //.image-back
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        top: -6.25em;
        
    }
    .small-image {
        display: none;
        top: 0;
        @media (max-width: 850px) {
            display: block;
        }
    }
    .detail-movie {
        position: absolute;
        top: 4vw;
        left: 0;
        max-width: 60%;
        background: rgba(0, 0, 0, 0.4);
        margin: 0 5%;
        color: #fff;
        border-radius: 0.5em;
        overflow: hidden;
        z-index: 5;
        transition: 300ms ease;
        .movie-title {
            padding: 1em;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.85);
        }
        @media (max-width: 850px) {
            background: rgba(0, 0, 0, 0.85);
            background: #222;
            min-width: 90%;
            top: 3vw;
            &:hover {
                background: #222;
        }
        }
        @media (max-width: 550px) {
            margin: 0 2%;
            min-width: 96%;
            top: 0;
        }
        h1 {
            margin: 0.3em 0;
        }
        .one-row {
            display: flex;
            align-items: flex-end;
            h3 {
                margin-left: 1em;
            }
        }
        .description {
            line-height: 1.3em;
            margin-top: 1em;
        }
        .close {
            position: absolute;
            width: 1.5em;
            height: 1.5em;
            color: red;
            top: 0.2em;
            right: 0.2em;
            cursor: pointer;
        }
    }

    .movies {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        
        position: relative;
        transition: 300ms ease;
        transform: translateY(-18em);
        padding: 0 1em;
        @media (max-width: 1200px) {
            transform: translateY(-10em)
        }
        @media (max-width: 900px) {
            transform: translateY(-2em)
        }
        @media (max-width: 550px) {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        }
    }
    .not-up {
        @media (max-width: 1400px) {
            transform: translateY(-2em)
        }
        
    }
`

export default LoggedIn