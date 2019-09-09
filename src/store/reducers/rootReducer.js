import authReducer from './authReducer'
import musicReducer from './musicReducer'
import userMusicReducer from "./userMusicReducer";
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    music: musicReducer,
    userMusic: userMusicReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;