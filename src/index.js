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
        {/* If you need to access props in RecipeLanding, make sure to pass props through the callback function of render to recipeLanding via {...props}. then in RecipeLanding take props in through the constructor and pass it through to super. Component handles setting the correct values for this.props when we do this. */}
        <Route path="/recipes" render={(props) => {
            return ( 
            <RecipeLanding {...props}>
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
