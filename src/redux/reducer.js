import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import {DISHES} from '../shared/dishes'
export const initialState={
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS,
}
export const Reducer=(state=initialState,action)=>{
    return state;
}