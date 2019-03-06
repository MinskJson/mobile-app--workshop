import * as React from "react";
import { Page } from "../../../components/page/Page";

type DetailsProps = {
  match: {
    params: {
      userId: string,
    }
  }
}
const Details = ({match}: DetailsProps) => {
  return <Page>
    <Page.Header/>
    <Page.Content>
      <div style={{padding: '24px'}}>
        Hello Details 
        <div>
          <b>{match.params.userId}</b>
        </div>
      </div>
    </Page.Content>
    <Page.Footer/>
  </Page>
}

export {
  Details
}