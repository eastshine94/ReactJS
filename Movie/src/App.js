import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import { thisTypeAnnotation } from '@babel/types';


class App extends Component {
  //컴포넌트 라이프 사이클
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  /* jshint ignore:start */
  state = {};
  componentWillMount(){
    console.log('will Mount');
  }

  componentDidMount() {
    console.log('did Mount')
    this._getMoives();
  }

  _renderMovies = ()=> {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        rating={movie.rating} 
        synopsis={movie.synopsis}  
        key={movie.id} 
        />
    });
    return movies;
  }


  _getMoives = async () =>{
    //_callApi가 끝나기를 기다리고 return 값이 무엇이든지 간에 moives에 return한다.
    // 그리고 setState를 실행
    const movies = await this._callApi();
    this.setState({
      //movies : movies를 그냥 movies로 표현할 수 있음
      movies
    });
  };

  _callApi = () =>{
    //fetch로 url에 있는 것을 잡아옴
    //성공시 then 실패시 catch
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => err);
  };

  render(){
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }

  /* jshint ignore:end */
}

export default App;







