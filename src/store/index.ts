import {
  configureStore,
  combineReducers,
  AnyAction,
  CombinedState,
  MiddlewareArray,
  ThunkMiddleware,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { createWrapper } from "next-redux-wrapper";
import { Persistor } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import favoritesSlice, { FavoritesState } from "./slices/favoritesSlice";
import searchSlice, { SearchState } from "./slices/searchSlice";

const rootReducer = combineReducers({
  [searchSlice.name]: searchSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistConfig = {
      key: "nextjs",
      whitelist: ["favorites"],
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: AppStore = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

const store = makeStore();
export const wrapper = createWrapper<AppStore>(makeStore);

export type AppStore = ToolkitStore<
  CombinedState<{
    search: SearchState;
    favorites: FavoritesState;
  }>,
  AnyAction,
  MiddlewareArray<
    [
      ThunkMiddleware<
        CombinedState<{
          search: SearchState;
          favorites: FavoritesState;
        }>,
        AnyAction,
        undefined
      >
    ]
  >
> & {
  __persistor?: Persistor;
};

export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
