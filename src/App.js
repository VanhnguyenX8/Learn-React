import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={(username) => setUser(username)} />}
      />
      <Route
        path="/todo"
        element={
          user ? (
            <TodoPage user={user} onLogout={() => setUser(null)} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      {/* Route mặc định */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
