import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducer/authSlice';
import appReducer from './reducer/appSlice';
import blackListReducer from './reducer/listSlice';
import loadingMiddleware from './middleware/loadingMiddleware';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  blackList: blackListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(loadingMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
