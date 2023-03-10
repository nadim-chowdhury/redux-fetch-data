import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "./todosConstant";

export const getAllTodos = () => async (disPatch) => {
  disPatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    disPatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    disPatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
