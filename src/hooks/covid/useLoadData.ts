import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useLoadData = (action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action);
  }, [action]);
};
