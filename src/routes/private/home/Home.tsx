import React, { useEffect, useState, useMemo } from "react";
import { Page } from "../../../components/page/Page";
import { User } from "../../../components/user/User";
import { MemoryHistory } from "history";
import { UserType } from "../../../store/users/UserType.model";
import { connect } from "react-redux";
import { StoreStateType } from "../../../store";
import { getUsers } from "../../../store/users/user.api";
import { usersGetAll } from "../../../store/users/actions";
import products from './data.json';
import { Dispatch } from "redux";
import { Post } from "../../../components";
import { PostItemType } from "../../../components/post/Post";
import { Input, Form } from "antd";
import { filtredProducts, filtredProductsByCost } from "./filter";

// @ts-ignore
const productsItems = products.products as PostItemType[];

type HomeProps = {
  history: MemoryHistory,
  users: UserType[],
  match: {
    path: string,
  },
  usersGetAll: () =>{}
};

const Home = ({history, users, usersGetAll, match}: HomeProps) => {
  const [searchQuery, setSearchQeury] = useState('');
  const [costQuery, setCostQeury] = useState(0);

  const onQueryChange = (e:any) => {
    setSearchQeury(e.target.value);
  };

  const onCostChange = (e:any) => {
    setCostQeury(parseFloat(e.target.value));
  };
  let fProducts = filtredProducts(productsItems, searchQuery)
  fProducts = filtredProductsByCost(fProducts, costQuery);

  useEffect(() => {
    usersGetAll();
  }, []);

  return <Page>
    <Page.Header/>
    <Page.Content>
      <Form style={{padding: '24px 24px'}}>
        <Form.Item label="По имени">
          <Input placeholder="Фильтр по имени" onInput={onQueryChange} />
        </Form.Item>
        <Form.Item label="По цене">
          <Input placeholder="Цена" type="number" onInput={onCostChange} />
        </Form.Item>
      </Form>
      {/* <User.Group>
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
      </User.Group> */}
      <div>
        {
          fProducts.map(e => {
            return <Post key={e.id} item={e as PostItemType} query={searchQuery} isLiked />
          })
        }
      </div>
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