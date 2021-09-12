import {Route, Switch} from'react-router-dom'
import GlobalLoadingSpinner from './components/GlobalLoadingSpinner';
import AllMoviesByGenre from './pages/AllMoviesByGenre';
import Home from "./pages/Home";
import Navigation from "./pages/partials/Navigation";
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {

  return (
    <>
    <Navigation/>
    <div id="App">
      <GlobalLoadingSpinner />

      <Switch>

      <Route exact path="/">
        <Home />       
      </Route>

      <Route path="/movie/:id">
        <MovieDetailsPage  />
      </Route>

      <Route  path="/movies/genres/:id">
        
          <AllMoviesByGenre />
      
      </Route>

    </Switch>
    </div>
    </>
  );
}

export default App;
