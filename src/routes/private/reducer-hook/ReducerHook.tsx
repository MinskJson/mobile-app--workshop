import React, { useEffect, useState, useCallback, useReducer, useContext, createContext, ReactNode } from "react";
import { Page } from "../../../components/page/Page";
import { Button, Input } from "antd";

const StoreContext = createContext({
  count: 0,
  actions: {
    onAdd: (e: string) =>{},
    onRemove: (e: string) =>{},
    onDivide: (e: string) =>{},
  }
});

const initialState = {
  count: 0,
}

const countReducer = (state:number, action:{type: string, payload: number}) => {
  switch(action.type) {
    case 'ADD':
      return state + action.payload;
    case 'REMOVE':
      return state - action.payload;
    case 'DIVIDE':
      return state / action.payload;
    default:
      return state;
  }
}

const CountProvider = ({children}: {children: ReactNode}) => {
  const [currentState, dispatch] = useReducer(countReducer, initialState.count);

  const onAdd = (value: string) => {
    dispatch({
      type: 'ADD',
      payload: parseFloat(value)
    });
  };

  const onRemove = (value: string) => {
    dispatch({
      type: 'REMOVE',
      payload: parseFloat(value)
    });
  };

  const onDivide = (value: string) => {
    dispatch({
      type: 'DIVIDE',
      payload: parseFloat(value)
    });
  };

  const actions = {
    onAdd,
    onRemove,
    onDivide
  };

  return <StoreContext.Provider
    value={{
      count: currentState,
      actions,
    }}>
    {children}
  </StoreContext.Provider>
}

const Hook = () => {
  const {count, actions} = useContext(StoreContext);

  const [value, setValue] = useState('');
  const onInputChange = (e: any) => {setValue(e.target.value)};

  return <div style={{padding: '32px'}}>
    <Input value={value} onInput={onInputChange} />
    <div>
      { count }
    </div>

    <Button onClick={() => actions.onAdd(value)}>Plus</Button>
    <Button onClick={() => actions.onRemove(value)}>Minus</Button>
    <Button onClick={() => actions.onDivide(value)}>Divide</Button>
  </div>
}

const HookCount = () => {
  const {count} = useContext(StoreContext);
  return <div style={{padding: '32px'}}>
    <div>
      { count }
    </div>
  </div>
}

const ReducerHook = () => {
  return <CountProvider>
    <Page>
      <Page.Header/>
      <Page.Content>
        <Hook />
        <HookCount />
      </Page.Content>
      <Page.Footer/>
    </Page>
  </CountProvider>
};

export {
  ReducerHook
}