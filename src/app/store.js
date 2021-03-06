import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reducer';

export default createStore(rootReducer, applyMiddleware(thunk));
