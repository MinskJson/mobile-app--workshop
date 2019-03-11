import { USERS_GET_ALL, USERS_GET_BY_ID, USERS_RESET } from "./constants";
import { UserType } from "./UserType.model";
import { PostType } from "../post/PostType.model";

type CurrentUserType = {
  user: UserType | null,
  posts: PostType[],
};

type UsersReducerStateType = {
  users: UserType[],
  currentUser: CurrentUserType
}

type ActionType = {
  payload: UserType[] | CurrentUserType | undefined;
  type: string;
}

const defaultState:UsersReducerStateType = {
  users: [],
  currentUser: {
    user: null,
    posts: [],
  }
}

const usersReducer = (state = defaultState, action:ActionType) => {
  if (action.payload) {
    switch(action.type) {
      case USERS_GET_ALL:
        return {
          ...state,
          users: action.payload as UserType[],
        };
    
      case USERS_GET_BY_ID:
        return {
          ...state,
          currentUser: action.payload as CurrentUserType,
        };
      case USERS_RESET:
        return {
          users: [],
          currentUser: {
            user: null,
            posts: [],
          }
        };
    }
  }
  return state;
}

export {
  usersReducer
}