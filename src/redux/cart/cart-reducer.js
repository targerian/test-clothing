import {CartActionTypes} from "./cart.action.types";
const INITIAL_STATE = {
    hidden: true
}
const CartReducer = (state = INITIAL_STATE, action) => {
      switch(action.type){
          case CartActionTypes.TOGGLE_CARD_VISIBILITY:
              return {
                  ...state,
                  hidden: !state.hidden
              }
          default:
              return state;
      }
}

export default CartReducer;