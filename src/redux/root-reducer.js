import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import CartReducer from "./cart/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
}

//da config el persist, bya5od object,, you pass it a key to know where to start persisting from
//and the storage "the local storage path on windows",
//and finally a white list of all the reducers you wanna persist.. ((in a string form))

const rootReducer = combineReducers({
    user : userReducer,
    cart : CartReducer

})

export default persistReducer(persistConfig, rootReducer);

