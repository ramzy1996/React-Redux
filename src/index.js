import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AppClass from "./AppClass";
// import AppFunction from "./AppFunction";

//selector
const VADIVELU_COMEDY = "VADIVELU_COMEDY";
const GOUNDERMANI_COMEDY = "GOUNDERMANI_COMEDY";
const SUBSCRIBE_CHANNEL = "SUBSCRIBE_CHANNEL";

//Action
export const vadiveluComedy = () => ({ type: VADIVELU_COMEDY });
export const goundermaniComedy = () => ({ type: GOUNDERMANI_COMEDY });
export const subscribe = () => ({ type: SUBSCRIBE_CHANNEL });

const init = {
  img:
    "data:image/png;base64,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",
  isSubscribed: false
};

//Reducer
const comeryReducer = (state = init, action) => {
  switch (action.type) {
    case SUBSCRIBE_CHANNEL:
      return {
        img:
          "data:image/png;base64,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",
        isSubscribed: !state.isSubscribed
      };
    case VADIVELU_COMEDY:
      return {
        ...state,
        img:
          "data:image/jpeg;base64,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"
      };
    case GOUNDERMANI_COMEDY:
      return {
        ...state,
        img:
          "data:image/jpeg;base64,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"
      };
    default:
      return {
        ...state
      };
  }
};

//store
let store = createStore(comeryReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(vadiveluComedy());
// store.dispatch(goundermaniComedy());

//Redux
//...........

//Action - example delete action
//Reducer - Code Implementation
//Store - keep in store (reducer)
//Dispatch - for use ur operation

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppClass />
  </Provider>,
  rootElement
);