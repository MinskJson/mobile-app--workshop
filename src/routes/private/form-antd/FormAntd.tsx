import React from "react";
import { Form, Input, Button } from 'antd';
import { Page } from "../../../components/page/Page";
import { FormComponentProps } from "antd/lib/form";
import './form.css';

type FormProps = {
  model: {
    name: string;
    secondName: string;
  }
} & FormComponentProps;

const customValidator = (...args: any) => {
  const [, ,cb] = args;
  console.log(args);
}
const FormPage = ({model, form}: FormProps) => {
  const { getFieldDecorator } = form;
  const onSubmit = (e: any) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values)=> {
      console.log(err, values);
    })
  }

  return <Page>
    <Page.Header/>
    <Page.Content>
      <Form onSubmit={onSubmit} className="form__antd">
        <Form.Item label="Name">
          {getFieldDecorator(
            'name', 
            {
              initialValue: model.name,
              rules: [{
                message: "Поле обязательное братан",
                required: true,
              }, {
                validator: customValidator
              }]
            }
          )(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="Second Value">
          {getFieldDecorator(
            'secondValue', 
            {
              initialValue: model.secondName
            }
          )(<Input type="text" />)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </Page.Content>
    <Page.Footer/>
  </Page>
};

// @ts-ignore
const FormPageWithForm = Form.create()(FormPage);

const RenderForm = () => {
  return <FormPageWithForm model={{name: "xXX", secondName: "JOE"}} />
}
export default RenderForm;