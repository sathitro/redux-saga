import {put, delay} from 'redux-saga/effects';
import { INCREMENT, DECREMENT, ADD } from "../actionTypes"

//**************************** to Reducer
export function* setIncrementAction(){
    yield put({type: INCREMENT});    
}

export function* setIncrementAsyncAction(){
    yield delay(1000)
    yield put({type: INCREMENT});    
}

export function* setDecrementAction(){
    yield put({type: DECREMENT});    
}

export function* setAddAction({payload}){
    yield put({type: ADD, payload: payload});    
}



//**************************** from UI 
