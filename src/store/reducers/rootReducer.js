import authReducer from './authReducer'
import musicReducer from './musicReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    music: musicReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;