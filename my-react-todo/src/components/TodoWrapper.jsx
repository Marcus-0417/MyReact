import { useState } from "react"
import CreateForm from "./CreateForm"
import ToDo from "./ToDo"

function TodoWrapper() {

    /* 因為有N個todo，所以使用陣列存取 */
    /* 因為陣列需要key屬性，所以要改成陣列物件加上id */
    // const [todos, setTodos] = useState([
    //     { content: "List1", id: Math.random() },
    //     { content: "List2", id: Math.random() },
    // ]);
    /* 因為要判定todo是否被點擊，所以要增加一個標記屬性=> isCompleted */
    const [todos, setTodos] = useState([
        { content: "List1", id: Math.random(), isCompleted: false },
        { content: "List2", id: Math.random(), isCompleted: false },
    ])

    /* 建立加入新的todo內容 */
    /* 1. 使用...其餘運算子來保留原陣列內容 */
    /* 2. 加入新的物件內容 */
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false }])
    }

    /* 建立刪除todo函式，傳給ToDo元件使用，使用filter方法去除被刪除的todo */
    const deleteTodo = (id) => {
        /* 檢查目前的id是否為被刪除的id，若不是則保留 */
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    /* 建立雙向(toggle)切換完成與取消的函式 */
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            //         if (todo.id === id) {
            //             return { ...todo, isCompleted: !todo.isCompleted }
            //         } else {
            //             return todo
            // }
            /* 檢查被點擊的id是否跟目前陣列中的id一樣
               Yes => 1.取出todo 2.將isCompleted屬性值反向處理(true => false, false => true)
               No => todo不變 */
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }

    /* 視作 */
    const updateTodo = (id, newContent) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, content: newContent } : todo
            )
        );
    };


    return (
        <div className="todo-wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <ToDo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted} />
                })
            }
        </div>
    )
}

export default TodoWrapper