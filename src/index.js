import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import {HashRouter, Route, Switch} from 'react-router-dom'

//components 
import List from './Components/List'
import RecipeDashboard from './Components/RecipeDashboard'
import RecipeLanding from './Components/RecipeLanding'
import SpecificRecipe from './Components/SpecificRecipe'

ReactDOM.render(
<HashRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={List} />
        <Route path="/recipes" render={() => {
            return ( 
            <RecipeLanding>
                <Switch>
                    <Route path="/recipes/:id" component={SpecificRecipe} />
                    <Route component={RecipeDashboard} />
                </Switch>
            </RecipeLanding>
            )
        }} />
    </Switch>
</HashRouter>
, document.getElementById('root'));
// registerServiceWorker();
