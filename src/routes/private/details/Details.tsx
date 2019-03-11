import React, { useEffect } from "react";
import { Page } from "../../../components/page/Page";
import { StoreStateType } from "../../../store";
import { Dispatch } from "redux";
import { getUser } from "../../../store/users/user.api";
import { usersGetByID } from "../../../store/users/actions";
import { connect } from "react-redux";
import { UserType } from "../../../store/users/UserType.model";
import { PostType } from "../../../store/post/PostType.model";

type DetailsProps = {
  currentUser: {
    user: UserType | null,
    posts: PostType[],
  },
  getUserById: (id: number) => {};
  match: {
    params: {
      userId: string,
    }
  }
}
const Details = ({currentUser, match, getUserById}: DetailsProps) => {
  useEffect(()=> {
    getUserById(parseInt(match.params.userId));
  }, [match.params.userId]);

  return <Page>
    <Page.Header/>
    <Page.Content>
      <div style={{padding: '24px'}}>
        {currentUser.user && currentUser.user.name}
        <div>
          <b>{match.params.userId}</b>
        </div>
        {currentUser.posts.map(post => {
          return <div key={post.id}>
            {JSON.stringify(post)}
            <br />
          </div>
        })}
      </div>
    </Page.Content>
    <Page.Footer/>
  </Page>
};

const mapStateToProps = (state: StoreStateType) => {
  return {
    currentUser: state.users.currentUser
  }
}

const mapActionToProps = (dispatch: Dispatch) => {
  return {
    getUserById: async (id: number) => {
      const user = await getUser(id);
      
      dispatch(usersGetByID(user));
    }
  }
}

const DetailsWithState = connect(mapStateToProps, mapActionToProps)(Details);

export {
  DetailsWithState as Details
}