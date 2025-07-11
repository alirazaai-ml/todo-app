import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    if (newText.trim()) editTodo(todo.id, newText.trim());
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="left-section">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            autoFocus
          />
        ) : (
          <span onDoubleClick={handleEdit}>{todo.text}</span>
        )}
      </div>
      <div className="actions">
        <button onClick={() => deleteTodo(todo.id)} className="delete">Delete</button>
        {!isEditing && (
          <button onClick={handleEdit} className="edit">Edit</button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
