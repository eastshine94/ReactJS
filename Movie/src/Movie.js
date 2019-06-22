import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//props를 이용해서 부모가 자식에게 변수를 상속할 수 있다.

class Movie extends Component{
    //JSX 명령어를 실행하려면 {}를 해줘야함
    /* jshint ignore:start */

    static propTypes ={
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster ={ this.props.poster }/>
            </div>
            
        ) 
    }
     /* jshint ignore:end */
}

class MoviePoster extends Component{
    /* jshint ignore:start */

    static propTypes ={
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src = { this.props.poster }></img>
        )
    }
    /* jshint ignore:end */
}


export default Movie