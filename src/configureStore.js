import { createStore, compose } from "redux";
import createreducer from './reducers'


export default function configureStore(initialState={}){

    let composeEnhancers = compose;

    const store = createStore(createreducer(),initialState )

}