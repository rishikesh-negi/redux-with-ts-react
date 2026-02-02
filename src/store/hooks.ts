import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

// Creating a custom dispatch hook with extra type information for the cart slice:
export const useAppDispatch: DispatchFunction = useDispatch;

// The TypedUseSelectorHook type creates a typed state selector function that is more type-aware compared to the default useSelector hook, but it needs the type of the state stored by Redux as its type argument. Therefore, the RootState type is created in the store module and imported for use here:
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
