export interface TodoState {
    todos: any[],
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}

interface FatchTodosAction {
    type: TodoActionTypes.FETCH_TODOS;
}
interface FatchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FatchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface FatchTodosPageAction {
    type: TodoActionTypes.SET_TODOS_PAGE;
    payload: number;
}

export type TodoAction = FatchTodosAction | FatchTodosSuccessAction | FatchTodosErrorAction | FatchTodosPageAction