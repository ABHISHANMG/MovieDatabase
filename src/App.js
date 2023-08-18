import {Route,Switch} from 'react-router-dom/cjs/react-router-dom.min'

import { HomePage } from './components/HomePage';  

import './App.css';
import { MovieDetails } from './components/MovieDetails';

const App = ()=> { 

  const val = 0 

  return (

      // <HomePage/>
  <Switch>
    <Route exact path="/" component={HomePage}/> 
    <Route
            exact
            path="/movie-review/:id"
            component={MovieDetails}
          />
  </Switch>
  )
}

export default App;
