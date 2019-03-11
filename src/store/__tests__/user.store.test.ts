import {store} from '../index';
import * as userActions from "../users/actions";
import * as userApi from "../../api/user.api";

describe('store -> user reducer', ()=> {
  it('users exists', () => {
      let state = store.getState();
  
      expect(state.users.users).toEqual([]);
  });

  it('current user exists', () => {
    let state = store.getState();

    expect(state.users.currentUser.posts).toEqual([]);
  });
  
  it('reducer math', async () => {
      const initialState = store.getState();
      const users = await userApi.getUsers();
      
      store.dispatch(userActions.usersGetAll(users));
      
      const state = store.getState();
      expect(state.users.users.length).toBeGreaterThan(0);
      expect(state.users.users).not.toEqual(initialState.users.users);
  });
});