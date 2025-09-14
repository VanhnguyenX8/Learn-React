import { BaseNetwork } from "../network/BaseNetWork";
import { Todo } from "../models/Todo";

const network = new BaseNetwork();

export function setToken(token) {
    network.setToken(token);
}

export async function getTodos() {
    const data = await network.request("/api/todos");
    return data.map((item) => Todo.fromApi(item));
}

export async function addTodo(text) {
    const data = await network.request("/api/todos", "POST", { text });
    return Todo.fromApi(data);
}

export async function deleteTodo(id) {
    await network.request(`/api/todos/${id}`, "DELETE");
}
