import { INIT_STATE } from "../../constant";
import { getType, loginAccount } from "../actions";

export default function accountsReducers(state = INIT_STATE.accounts, action) {
    switch (action.type) {
        case getType(loginAccount.loginAccountRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(loginAccount.loginAccountSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload]
            }
        default:
            return state;
    }
}