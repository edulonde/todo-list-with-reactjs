export const TodoListItem = (props) => {
    return (

        <li>
            <input type="checkbox"/>
            {props.item.name}
        </li>
    )
}