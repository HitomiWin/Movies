import {Route, Switch} from'react-router-dom'
import Home from "./pages/Home";
import Navigation from "./pages/partials/Navigation";

function App() {

  return (
    <>

    <Navigation/>
    <div className="App">
    <Switch>
      <Route>
        <Home exact path="/"/>
      </Route>
    </Switch>
    </div>
    </>
  );
}

export default App;
