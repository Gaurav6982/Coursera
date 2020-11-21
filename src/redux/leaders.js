// import { LEADERS } from '../shared/leaders'
import * as ActionTypes from './ActionTypes'

export const Leaders=(state={
    leaders:[],
    errMess:null,
    isLoading:true,
},action)=>{
    switch(action.type)
    {
        case ActionTypes.LEADERS_LOADING:
            return {...state,leaders:[],errMess:null,isLoading:true};
        case ActionTypes.LEADERS_FAILED:
            return {...state,leaders:[],errMess:action.payload,isLoading:false};
        case ActionTypes.ADD_LEADERS:
            return {...state,leaders:action.payload,errMess:null,isLoading:false};
        default:
            return state;
    }
}