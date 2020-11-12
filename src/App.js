import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './redux/reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './redux/root-saga'

import Home from './pages/Home';
import './App.css';

const sagaMiddleware= createSagaMiddleware()

let middlewares= [sagaMiddleware]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares= [sagaMiddleware]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  composeEnhancers(applyMiddleware(...middlewares))
}

const store= createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const routes= (
  <BrowserRouter>
    <Switch>
      <Route exact path={['/','/home']} component={Home}/>
    </Switch> 
</BrowserRouter>
)

const App= () => (
  <Provider store={store}>
    {routes}
  </Provider>
)

export default App;
