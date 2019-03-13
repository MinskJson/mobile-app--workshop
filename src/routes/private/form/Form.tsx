import React, { useState } from "react";
import { Page } from "../../../components/page/Page";
import './form.css';

type FormProps = {
  model: {
    name: string;
    secondName: string;
  }
};

let formModel:{
  name?: string;
  secondName?: string;
} = {};

const Form = ({model}: FormProps) => {
  if (Object.keys(formModel).length === 0){
    Object.assign(formModel, model);
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formModel);
    console.log(e);
  }

  const onNameInput = (e: any) => {
    formModel.name = e.target.value;

  }

  const onSecondNameInput = (e: any) => {
    formModel.secondName = e.target.value;
  }

  console.log(formModel);

  return <Page>
    <Page.Header/>
    <Page.Content>
      <form onSubmit={onSubmit} noValidate>
        <input type="text" name="name" onInput={onNameInput} defaultValue={formModel.name} />
        <input type="text" name="secondName" onInput={onSecondNameInput} defaultValue={formModel.secondName} />
        <button type="submit">
          Button
        </button>
      </form>
    </Page.Content>
    <Page.Footer/>
  </Page>
};

const RenderForm = () => {
  return <Form model={{name: "xXX", secondName: "JOE"}} />
}
export {
  RenderForm as Form
}