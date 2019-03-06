import * as React from "react";
import { Page } from "../../../components/page/Page";
import { MemoryHistory } from "history";

type AuthProps = {
  history: MemoryHistory,
}

type LoginFormType = {
  login: HTMLInputElement,
  password: HTMLInputElement,
} & EventTarget;

const Auth = ({history}: AuthProps) => {
  return <Page>
    <Page.Header/>
    <Page.Content>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const loginForm = e.target as LoginFormType;
 
          if (loginForm.login.value === 'Edward Snowden') {
            localStorage.setItem('user', JSON.stringify({
              login: loginForm.login.value, 
              password: loginForm.password.value
            }));

            history.push('/');
          }
        }}
        style={{padding: '24px'}}
      >
        <label style={{display: 'block'}}>
          <div>Login</div>
          <input type="text" name="login" placeholder="login" />
        </label>
        <label style={{display: 'block'}}>
          <div>Password</div>
          <input type="password" name="password" placeholder="password" />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </Page.Content>
    <Page.Footer/>
  </Page>
}

export {
  Auth
}