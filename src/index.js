import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/fbConfig'
import { root } from "./store/saga/index";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore( rootReducer,
    compose(
        applyMiddleware(sagaMiddleware, thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
        reduxFirestore(firebase)
    )   
)

sagaMiddleware.run(root);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, 
    document.getElementById('root'));
    
    serviceWorker.unregister();
})
    

