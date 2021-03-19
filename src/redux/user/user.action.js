import { UserActionType } from "./user.action.type"
export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})