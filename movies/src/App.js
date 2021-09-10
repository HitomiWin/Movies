import {Route, Switch} from'react-router-dom'
import GlobalLoadingSpinner from './components/GlobalLoadingSpinner';
import AllMoviesByGenre from './pages/AllMoviesByGenre';
import Home from "./pages/Home";
import Navigation from "./pages/partials/Navigation";

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

      <Route  path="/movies/genres">
      <AllMoviesByGenre />
      </Route>
      
    </Switch>
    </div>
    </>
  );
}

export default App;
