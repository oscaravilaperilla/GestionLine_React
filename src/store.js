
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import firebase from 'firebase';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCsz8Dj5RIHeISFRkWwJcKJSEgsgjMxyNY",
    authDomain: "employees-86ecc.firebaseapp.com",
    databaseURL: "https://employees-86ecc.firebaseio.com",
    projectId: "employees-86ecc",
    storageBucket: "employees-86ecc.appspot.com",
    messagingSenderId: "1016214655529"
  }
  firebase.initializeApp(firebaseConfig);
  







export default function configureStore(initialState={}) {

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;
    

 //reduxImmutableStateInvariant({
    //ignore: [
        //'firebase'
      //]
    //}),
 const store =   createStore(rootReducer, initialState, composeEnhancers(
     applyMiddleware(thunk,
 )));


 

return store;

}