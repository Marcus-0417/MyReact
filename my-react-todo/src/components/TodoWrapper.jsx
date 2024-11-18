import { useState } from "react"
import CreateForm from "./CreateForm"
import ToDo from "./ToDo"

function TodoWrapper() {

    /* 因為有N個todo，所以使用陣列存取 */
    /* 因為陣列需要key屬性，所以要改成陣列物件加上id */
    const [todos, setTodos] = useState([
        { content: "List1", id: Math.random() },
        { content: "List2", id: Math.random() },
    ]);

    /* 建立加入新的todo內容 */
    /* 1. 使用...其餘運算子來保留原陣列內容 */
    /* 2. 加入新的物件內容 */
    const addTodo = (content) => {
        setTodos([...todos, {content: content, id: Math.random()}])
    }

    return (
        <div className="todo-wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <ToDo todo={todo} key={todo.id} />
                })
            }
        </div>
    )
}

export default TodoWrapper