import { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

function ToDo({ todo, deleteTodo, toggleCompleted, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false); // 用來追蹤是否處於編輯模式
    const [editContent, setEditContent] = useState(todo.content); // 編輯中的內容

    const handleEditClick = () => {
        setIsEditing(true); // 進入編輯模式
    };

    const handleSave = () => {
        updateTodo(todo.id, editContent); // 更新待辦事項的內容
        setIsEditing(false); // 離開編輯模式
    };

    const handleCancel = () => {
        setEditContent(todo.content); // 恢復原本的內容
        setIsEditing(false); // 離開編輯模式
    };

    return (
        <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                    />
                    <button onClick={handleSave}>儲存</button>
                    <button onClick={handleCancel}>取消</button>
                </div>
            ) : (
                <p onClick={() => toggleCompleted(todo.id)}>{todo.content}</p>
            )}
            <div>
                {!isEditing && (
                    <MdEdit
                        style={{ cursor: "pointer" }}
                        onClick={handleEditClick}
                    />
                )}
                <MdDeleteForever
                    onClick={() => deleteTodo(todo.id)}
                    style={{ cursor: "pointer", marginLeft: "5px" }}
                />
            </div>
        </div>
    );
}



export default ToDo;