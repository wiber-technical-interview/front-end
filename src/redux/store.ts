import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Importa el middleware que necesites
import reducer from "./reducer";

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  )
);

export default store;
