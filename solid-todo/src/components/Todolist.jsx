//Todolist.jsx

import styles from "./Todolist.module.css"
import { For, onMount } from "solid-js"
import { createStore } from "solid-js/store"

function TodoList() {
    let input;
    const addTodoItem = (input) => {
        const title = input.value;
        if (!title.trim()) return;
        setTodos({
            items: [{ text: title, id: todos.counter }, ...todos.items],
            counter: todos.counter + 1
        });
        input.value = "";
    }

    const removeTodoItem = (index) => {
        setTodos('items', (t) => t.filter((item) => item.id !== index))
    }
    onMount(() => {
        setTodos("items", [
            { text: "Go swimming", id: 2 },
            { text: "Go scuba diving", id: 1 }
        ])
    })
    const [todos, setTodos] = createStore({
        items: [],
        counter: 3,
    })
    return (
        <>
            <div class={styles.container}>
                <input type="text" ref={input} 
                    placeholder="What do you have to do today?" name="todo"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTodoItem(input);
                        }
                    }}>
                </input>
                <ul class={styles.todoList}>
                    <For each={todos.items}>{(todo) =>
                        <li>
                            <div class={styles.todoItem}>
                                {todo.text}
                                <i class="fa fa-minus-circle" onClick={() => {
                                    removeTodoItem(todo.id);
                                }}></i>
                            </div>
                        </li>
                    }
                    </For>
                </ul>
            </div>
        </>
    );
}
export default TodoList