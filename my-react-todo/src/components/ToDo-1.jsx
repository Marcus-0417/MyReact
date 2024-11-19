import { MdDeleteForever, MdEdit } from "react-icons/md";



/* 解構props的屬性名，用{}包起來 */
function ToDo({ todo, deleteTodo, toggleCompleted}) {
    return (
        /* 新增一個completed的類別規則，
        使用反引號搭配三元運算子檢查isCompleted
        如果為true=>套用completed類別規則
        如果為false=>取消completed類別規則 */
        <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
            <p onClick={() => toggleCompleted(todo.id)}>{todo.content}</p>
            <div>
                <MdEdit onClick={() => editTodo(todo)} style={{ cursor: "pointer" }} />
                <MdDeleteForever onClick={() => deleteTodo(todo.id)}
                    style={{ cursor: "pointer", marginLeft: "5px" }} />
            </div>
        </div>
    )
}

export default ToDo