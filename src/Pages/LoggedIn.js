import React, { useEffect, useState } from 'react'
// Component
import Movie from '../components/loggedIn/Movie'
import ArrowCarousel from '../components/loggedIn/ArrowCarousel'
import ScrollTop from '../components/ScrollTop'
// Style
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import { styleVar } from '../styleVar'
// Animation
import { motion, AnimatePresence } from 'framer-motion'
import { containerMovies, detailMovieAnime, loadingPulse } from '../animations'
// Image
import closeSVG from '../assects/Logged_In/close-130px.svg'

const LoggedIn = ({ 
    popular, 
    setOk, 
    imageBack, 
    changeImage,
     handleDetail, 
     detailMovie,
     setDetailMovie,
     placeholderMovies,
     loading
}) => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
      setOk(true)
    }, [])

    useEffect(() => {
        changeImage()
        setPosition(0)
    }, [popular])

    // control move carousel-movies
    const handleArrow = (e) => {
      //console.log(e.target.className);
      const arrow = e.target.className
      if(arrow === "arrow arrow-right") {
          setPosition(position + 10.3);
      };
      if (arrow === "arrow arrow-left") {
          setPosition(position - 10.3);
      };
    };

  return (
    <StyleArticle>

        <img className='image-back' src={`https://image.tmdb.org/t/p/original${imageBack}`} alt="img" />

        {loading && (
            <div className="container-loading">
                <motion.h2 variants={loadingPulse} animate="show" className='loading'>Loading movies...</motion.h2>
            </div>
        )}

        <AnimatePresence>
            {detailMovie && (
                <motion.div 
                    className="detail-movie"
                    variants={detailMovieAnime}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <img className='small-image' src={`https://image.tmdb.org/t/p/w500${imageBack}`} alt="image_detail" />
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
                    <p className='placeholder-movies'>{placeholderMovies} movies <span>
                        <ArrowCarousel nameClass="placeholder-arrow" />
                        </span></p>
                    <div className="movies-carousel">
                                 
                        {position > 0 && <ArrowCarousel nameClass="arrow arrow-left" click={handleArrow} />}
                        

                        {popular.map(movie => (
                            <Movie key={movie.id} movie={movie} handleDetail={handleDetail} position={position} />
                        ))}
                        
                        <ArrowCarousel nameClass="arrow arrow-right" click={handleArrow} />
                        
                    </div>
                    
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

    .image-back {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        top: -6.25em;
    }

    .container-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            color: #fff;
            margin-bottom: 5em;
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
        transition: ${styleVar.transition};
        .small-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            display: none;
            
            @media (max-width: 850px) {
                display: block;
            }
        }
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
        
        display: flex;
        flex-direction: column;
        position: relative;
        transition: ${styleVar.transition};
        transform: translateY(-26em);
        //padding: 0 0.1em;
        overflow-x: hidden;
        
        .placeholder-movies {
            color: ${styleVar.colorText};
            margin: 0.6em 2.4em;
            display: flex;
            .placeholder-arrow {
                height: 0.8em;
                margin-top: 2px;
                opacity: 0;
                svg {
                    height: 100%;
                }
            }
        }

        .movies-carousel {
            display: flex;
            //overflow-x: scroll;
            padding: 1em 0;
            padding: 0 2.1em;
            position: relative;
            left: 0em;
        }
        .arrow {
            position: absolute;
            height: 16em;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5;
            background: rgba(0, 0, 0, 0.4);
            padding: 0 0.5em;
            cursor: pointer;
            transition: ${styleVar.transition} ;
            opacity: 0;
            border-radius: 0 0.3em 0.3em 0;
            @media (max-width: 550px) {
                height: 10em;
    }
            &:hover {
                background: rgba(0, 0, 0, 0.6);
            }
            svg {
                transition: ${styleVar.transition};
                pointer-events: none;
            }
            &:hover svg {
                transform: scale(1.2);
            }
        }

        .arrow-left {
            left: 0;
            
        }

        .arrow-right {
            right: 0;
            transform: rotate(180deg);
        }

        &:hover .arrow,
        &:hover .placeholder-arrow {
            opacity: 1;
        }
        @media (max-width: 1200px) {
            transform: translateY(-18em)
        }
        @media (max-width: 900px) {
            transform: translateY(-10em)
        }
        @media (max-width: 550px) {
            transform: translateY(-5em)
        }
        

    }
    .not-up {
        @media (max-width: 1400px) {
            transform: translateY(-16em)
        }
        @media (max-width: 1200px) {
            transform: translateY(-12em)
        }
        @media (max-width: 1000px) {
            transform: translateY(-6em)
        }
        @media (max-width: 900px) {
            transform: translateY(-2em)
        }
        
    }
`

export default LoggedIn