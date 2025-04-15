import { createContext, useContext, useReducer } from "react";

// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// Hook to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

export const getBasketItemCount = (basket) => {
  return basket?.reduce((count, item) => count + (item.quantity || 0), 0) || 0;
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => 
    total + (item.price * (item.quantity || 1)), 0) || 0;
};


