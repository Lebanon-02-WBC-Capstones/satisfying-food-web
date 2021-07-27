/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = { menuDisp: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menuDisp: action.menuDisp };
    default:
      return state;
  }
};
export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
