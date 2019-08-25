import * as types from "../actionTypes";
import firebase from '../../config/fbConfig'
import { googleProvider } from '../../config/fbConfig'

export const singIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: types.LOGIN_SUCCESS })
        }).catch(err => {
            const payload = err.message
            dispatch({ type: types.LOGIN_ERROR, payload })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
  
        firebase.auth().signOut().then(() => {
            dispatch({ type: types.SIGNOUT_SUCCESS })
        });
    }
}

export const singUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }) 
        }).then(() => {
            dispatch({ type: types.SIGNUP_SUCCESS })
        }).catch(err => {
            dispatch({ type: types.SIGNUP_ERROR, err})
        })
    }
}

export const googleLogin = () => {
    return dispatch => {
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
    
        firebase.auth().signInWithPopup(googleProvider)
          .then(result => {
              dispatch({ type: types.LOGIN_SUCCESS_GOOGLE })
        }).catch(err => {
            const payload = err.message
            dispatch({ type: types.LOGIN_ERROR, payload })
        })
    }
}