import React, { useEffect, useState, useMemo, PureComponent } from "react";
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
import { useTranslation, withTranslation, TranslationProps } from "react-i18next";
import i18next from "i18next";

// @ts-ignore
const productsItems = products.products as PostItemType[];

type HomeProps = {
  history: MemoryHistory,
  users: UserType[],
  t: i18next.TFunction,
  match: {
    path: string,
  },
  usersGetAll: () =>{}
};

const Home = ({history, users, usersGetAll, match}: HomeProps) => {
  const [searchQuery, setSearchQeury] = useState('');
  const [costQuery, setCostQeury] = useState(0);
  const {t} = useTranslation();

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
    <Page.Header />
    <Page.Content>
      <Form style={{padding: '24px 24px'}}>
        <Form.Item label={t('По имени')}>
          <Input placeholder={t("Фильтр по имени")} onInput={onQueryChange} />
        </Form.Item>
        <Form.Item label={t("По цене")}>
          <Input placeholder={t("Цена")} type="number" onInput={onCostChange} />
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

// class Home extends PureComponent<HomeProps> {
//   state = {
//     searchQuery: '',
//     costQuery: 0,
//   }

//   onQueryChange = (e:any) => {
//     this.setState({
//       searchQuery: e.target.value,
//     });
//   };

//   onCostChange = (e:any) => {
//     const {t} = this.props;
//     this.setState({
//       costQuery: parseFloat(e.target.value),
//       name: t('')
//     });
//   };

//   render() {
//     const {history, users, usersGetAll, match, t} = this.props;
//    return <Page>
//         <Page.Header />
//         <Page.Content>
//           <Form style={{padding: '24px 24px'}}>
//             <Form.Item label={t('По имени')}>
//               <Input placeholder={t("Фильтр по имени")} onInput={this.onQueryChange} />
//             </Form.Item>
//             <Form.Item label={t("По цене")}>
//               <Input placeholder={t("Цена")} type="number" onInput={this.onCostChange} />
//             </Form.Item>
//           </Form>
//           {/* <User.Group>
//           {users.map(user => (
//             <User
//               key={user.id} 
//               isCircle={user.id % 3 === 0}
//               onClick={() => {
//                 history.push(`/app/details/${user.id}`);
//               }}
//               img={user.img}
//               name={user.name} />)
//           )}
//           </User.Group> */}
//           {/* <div>
//             {
//               fProducts.map(e => {
//                 return <Post key={e.id} item={e as PostItemType} query={searchQuery} isLiked />
//               })
//             }
//           </div> */}
//         </Page.Content>
//         <Page.Footer/>
//       </Page>
//   }
// }

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

const HomeWithState = connect(mapStateToProps, mapActionToProps)(Home)
// const HomeWithTranslation = withTranslation()(HomeWithState);
export {
  HomeWithState as Home
}