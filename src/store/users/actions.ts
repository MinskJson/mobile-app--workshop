import { USERS_GET_ALL, USERS_RESET, USERS_GET_BY_ID } from "./constants";
import { UserType } from "../../models/UserType.model";

export function usersGetAll(users: UserType[]) {
    return {
        type: USERS_GET_ALL,
        payload: users,
    }
}

export function usersRest() {
    return {
        type: USERS_RESET,
        payload: null,
    }
}

export function usersGetByID(user: UserType) {
    return {
        type: USERS_GET_BY_ID,
        payload: user,
    }
}