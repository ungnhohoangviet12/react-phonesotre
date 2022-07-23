import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import 'antd/dist/antd.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './layouts/Admin/Admin';
import { useEffect, useState } from 'react';


function App() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("role");
    if (role === "user") {
      setRole("user")
    } else if (user === "admin") {
      setRole("admin")
    } else {
      setRole("")
    }
  }, [role])

  return (
    <div className="app">

      <Routes>
        <Route path='' element={<HomePage />}>
          <Route path='login' />
          <Route path='product' />
          <Route path='cart' />
          <Route path='register' />
          <Route path='product/details/:id' />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='products' >
            <Route path='add' />
            <Route path='edit/:id' />
          </Route>
          <Route path='users' >
            <Route path='view/:id' />
          </Route>

          <Route path='orders' />
          <Route path='dashboard' />
        </Route>
        <Route path="*" element={<Navigate to={role === "admin" ? "/admin" : "/"} />} />
      </Routes>
    </div>
  );
}

export default App;

