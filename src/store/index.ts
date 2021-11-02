import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import auth from './reducers/auth';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type IState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
