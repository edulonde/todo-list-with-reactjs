import {useState} from "react";
import { TodoListItem} from "./TodoListItem";

export const TodoList = () => {
    const defaultListItems = [
        {name: 'Tarefa 1', isCompleted: false},
        {name: 'Tarefa 2', isCompleted: false},
        {name: 'Tarefa 3', isCompleted: false},
        {name: 'Tarefa 4', isCompleted: false}

    ]
    const [items, setItems] = useState(defaultListItems)
    return (

        <ul>
            {items.map((item) => <TodoListItem item={item}/>)}
        </ul>)
}