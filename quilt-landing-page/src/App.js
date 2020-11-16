import React from 'react';

//router
import { Router, Route, Switch, withRouter } from 'react-router-dom';

//components
import Landing from './components/landing/Landing';
import Feedback from './components/feedback/Feedback';

//history
import history from './history';

// root component of the entire frontend 
const App = () => {
    return (<>
                <Router history = {history}>
                  <Switch>
                    <Route exact path = "/" component = {Landing} />
                    <Route path = "/feedback" component = {Feedback} />
                  </Switch>
                </Router>
            </>)
}


export default App;