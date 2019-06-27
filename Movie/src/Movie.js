/* jshint ignore:start */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css'

//props를 이용해서 부모가 자식에게 변수를 상속할 수 있다.
//이것은 functional component라고 한다.
//state가 없고 그저 props만 받는다.
//render, life Cycle 등 없음 



function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}


function MoviePoster({poster, alt}){

    return(
        <img src = {poster} alt={alt} title={alt} className="Movie_Poster"></img>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )   
}
/* jshint ignore:end */
Movie.propTypes ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired,
    rating : PropTypes.number 
}

MoviePoster.propTypes ={
    poster : PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre : PropTypes.string.isRequired
}


export default Movie