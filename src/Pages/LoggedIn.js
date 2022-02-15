import React from 'react'
import styled from 'styled-components'
import Movie from '../components/loggedIn/Movie'


const LoggedIn = ({ popular }) => {


  return (
    <StyleArticle>
        <img src="https://image.tmdb.org/t/p/original/dK12GIdhGP6NPGFssK2Fh265jyr.jpg" alt="red notice" />

        <div className="movies">
            {popular.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    </StyleArticle>
  )
}
const StyleArticle = styled.article`
    width: 100%;
    min-height: 60vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        top: -100px;
    }
    .movies {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
`

export default LoggedIn