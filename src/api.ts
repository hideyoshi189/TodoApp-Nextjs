import { Task } from './types';
const API_URL = "http://localhost:3002";
//上記環境変数を追加 process.env.NEXT_PUBLIC_API_URL || 

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`${API_URL}/tasks`, {
        cache: "no-store",
    });
    const todos = await res.json();

    return todos;
};

export const addTodo = async (todo:Task): Promise<Task> => {
    const res = await fetch(`${API_URL}/tasks`, {
    method: "POST" ,
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
});
    const newTodo = await res.json();

    return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT" ,
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({text: newText}),
});
    const updatedTodo = await res.json();

    return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE" ,
    headers: {
        "Content-Type": "application/json",
    },
});
    const deleteTodo = await res.json();

    return deleteTodo;
};
