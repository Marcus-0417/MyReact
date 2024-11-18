
/* 解構props的屬性名，用{}包起來 */
function ToDo({todo}) {
    return (
        <div className="todo">
            <p>{todo.content}</p>
        </div>
    )
}

export default ToDo