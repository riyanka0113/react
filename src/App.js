import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLodding, setIsLodding] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLodding(true);
    setError(null);

    try{
      // const respose = await fetch('https://swapi.dev/api/films/');
      const respose = await fetch('https://react-http-14608-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');

      if(!respose.ok){
        throw new Error('Something Went to wrong...');
      }

      const data = await respose.json();

      const loadMovies = [];

      for(const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDtae: data[key].releaseDate
        });
      }

      // const transformed = data.results.map((moviesData) => {
      //   return {
      //     id: moviesData.episode_id,
      //     title: moviesData.title,
      //     releaseDate: moviesData.release_date,
      //     openingText: moviesData.opening_crawl
      //   };
      // })

      // setMovies(transformed);
      setMovies(loadMovies);
    }catch(error){
      setError(error.message);
    }
    setIsLodding(false);
  },[]);

  const addMovieHandler = async (movie) => {
    const respose = await fetch('https://react-http-14608-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await respose.json();

    console.log(data);
  };

  useEffect(() => {
    fetchMoviesHandler();
  },[fetchMoviesHandler]);


  let content;

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }else if(error){
    content = <p>{error}</p>;
  }else if(isLodding){
    content = <p>Lodding...</p>
  }else{
    content = <p>No movies Found.</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
