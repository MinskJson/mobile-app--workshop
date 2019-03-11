import React, { useEffect } from "react";
import { Page } from "../../../components/page/Page";
import { User } from "../../../components/user/User";
import { MemoryHistory } from "history";
import { UserType } from "../../../models/UserType.model";
import { connect } from "react-redux";
import { StoreStateType } from "../../../store";
import { getUsers } from "../../../api/user.api";
import { usersGetAll } from "../../../store/users/actions";
import { Dispatch } from "redux";

type HomeProps = {
  history: MemoryHistory,
  users: UserType[],
  match: {
    path: string,
  },
  usersGetAll: () =>{}
};

const Home = ({history, users, usersGetAll, match}: HomeProps) => {
  useEffect(() => {
    usersGetAll();
  }, []);

  return <Page>
    <Page.Header/>
    <Page.Content>
      <User.Group>
      {users.map(user => (
        <User
          key={user.id} 
          isCircle={user.id % 3 === 0}
          onClick={() => {
            history.push(`/app/details/${user.id}`);
          }}
          img={user.img}
          name={user.name} />)
      )}
      </User.Group>
      TODO: Feeed;
    </Page.Content>
    <Page.Footer/>
  </Page>
}

const mapStateToProps = (state: StoreStateType) => {
  return {
    users: state.users.users
  }
}

const mapActionToProps = (dispatch: Dispatch) => {
  return {
    usersGetAll: async () => {
      const users = await getUsers();
      
      dispatch(usersGetAll(users));
    }
  }
}

const HomeWithState = connect(mapStateToProps, mapActionToProps)(Home);

export {
  HomeWithState as Home
}