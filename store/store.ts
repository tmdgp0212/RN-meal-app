import { combineReducers, configureStore } from "@reduxjs/toolkit";

import FavoriteReducer from "./favorites";

const rootReducer = combineReducers({ FavoriteReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type StoreStateType = ReturnType<typeof store.getState>;
