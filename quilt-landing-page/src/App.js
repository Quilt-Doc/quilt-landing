import React from 'react';

//router
import { Router, Route, Switch } from 'react-router-dom';

//components
import Landing from './components/landing/Landing';

//history
import history from './history';

// root component of the entire frontend 
const App = () => {
    return (<>
                <Router history = {history}>
                  <Switch>
                    <Route exact path = "/" component = {Landing} />
                  </Switch>
                </Router>
            </>)
}


export default App;