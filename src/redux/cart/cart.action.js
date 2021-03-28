import CartActionTypes from "./cart.action.types"


export const ToggleCartvisibility = () => ({
    type : CartActionTypes.TOGGLE_CARD_VISIBILITY
});

export const AddItem = (item) => ({
    type : CartActionTypes.ADD_ITEM,
    payload : item
})

export default ToggleCartvisibility;