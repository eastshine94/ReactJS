import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title : 'Matrix',
    poster : 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/3e/b7/bf/3eb7bfb1-dc0b-2fec-5fbe-9efb8c7c8395/MatrixTrilogy4K_V_DD_KA_TT_2000x3000_300dpi_EN.jpg/268x0w.jpg'
  },
  {
    title : 'Hunger Game',
    poster : 'https://imgix.bustle.com/uploads/image/2017/8/9/5846855f-3fd5-4db9-84cb-5f65ed2bd107-hunger-games.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'
  },
  {
    title : 'Old Boy',
    poster : 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg'
  },
  {
    title : 'Star wars',
    poster : 'https://t1.daumcdn.net/cfile/tistory/223BE445567253F028'
  }
]


class App extends Component {
  //컴포넌트 라이프 사이클
  //순서 : componentWillMount => render => componentDidMount
  //update : 

  /* jshint ignore:start */
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  
  render(){
    return (
      <div className="App">
  
       {movies.map((movie,index) => {
         return <Movie title={movie.title} poster={movie.poster} key={index} />
       })}
      </div>
    );
  }
  
  /* jshint ignore:end */
}

export default App;







