import * as types from "../actionTypes";

export const singIn = credentials => {
    console.log(credentials)
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: types.LOGIN_SUCCESS })
        }).catch(err => {
            dispatch({ type: types.LOGIN_ERROR, err })
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
                // initials: newUser.firstName[0] + newUser.lastName[0]
            }) 
        }).then(() => {
            dispatch({ type: types.SIGNUP_SUCCESS })
        }).catch(err => {
            dispatch({ type: types.SIGNUP_ERROR, err})
        })
    }
}