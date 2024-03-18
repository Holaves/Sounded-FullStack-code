import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { HYDRATE } from "next-redux-wrapper";
import { trackReducer } from "./trackReducer";
import { sizeReducer } from "./sizeReducer";
import { albumReducer } from "./albumReducer";

export const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer,
    playlist: playerReducer,
    album: albumReducer,
    size: sizeReducer,
})

//@ts-ignore
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    } else {
      return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>