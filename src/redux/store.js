import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// import * as api from '@client/api/';
import reducers from './reducers';

const api = {};

let store;

export default function getStore() {
    if (store) return store;

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const thunkMiddleware = thunk.withExtraArgument({ api });

    store = createStore(
        reducers,
        composeEnhancer(
            applyMiddleware(promiseMiddleware, thunkMiddleware)
        )
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}