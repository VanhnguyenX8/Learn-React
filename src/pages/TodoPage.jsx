import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "../components/TodoItem";


function TodoPage({ user, onLogout }) {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Xin chào, {user.userName}</h2>
      <button onClick={handleLogout}>Đăng xuất</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nhập công việc..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Thêm</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={removeTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
