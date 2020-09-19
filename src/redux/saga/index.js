import {put, takeEvery, all} from 'redux-saga/effects';
import { INCREMENT_REQ, DECREMENT_REQ, ADD_REQ, INCREMENT_ASYNC_REQ } from "../actionTypes"
import { setIncrementAction, setDecrementAction, setAddAction, setIncrementAsyncAction} from './counter.action';


export function* watchIncrementAction(){
    //takeEvery : ดัก request จาก UI
    yield takeEvery(INCREMENT_REQ, setIncrementAction);    
}

export function* watchIncrementAsyncAction(){
    //takeEvery : ดัก request จาก UI
    yield takeEvery(
        , setIncrementAsyncAction);    
}

export function* watchDecrementAction(){
    //takeEvery : ดัก request จาก UI
    yield takeEvery(DECREMENT_REQ, setDecrementAction);    
}

export function* watchAddAction(){
    //takeEvery : ดัก request จาก UI
    yield takeEvery(ADD_REQ, setAddAction);    
}

export default function* rootSaga(){
    yield all([
        watchIncrementAction(),
        watchDecrementAction(),
        watchIncrementAsyncAction(),
        watchAddAction()       
    ])
}