import * as React from "react";
import { Page } from "../../../components/page/Page";
import { User } from "../../../components/user/User";
import { MemoryHistory } from "history";

const longArr = new Array(100).fill(0).map((e, index) => index);

type HomeProps = {
  history: MemoryHistory,
}

const Home = ({history}: HomeProps) => {
  return <Page>
    <Page.Header/>
    <Page.Content>
      <User.Group>
      {longArr.map(e => (
        <User
          key={e} 
          isCircle={e % 3 === 0}
          onClick={() => {
            history.push(`/details/${e}`);
          }}
          img={`https://placeimg.com/640/480/people/${e}`}
          name={`Joe Doe ${e}`} />)
      )}
      </User.Group>
      TODO: Feeed;
    </Page.Content>
    <Page.Footer/>
  </Page>
}

export {
  Home
}