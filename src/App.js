import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import 'antd/dist/antd.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './layouts/Admin/Admin';
import { useSelector } from 'react-redux';


function App() {
  const { isAuthenticated } = useSelector(state => state.auth)


  return (
    <div className="app">
      <Routes>

        {/* user */}
        {!isAuthenticated && <Route path='' element={<HomePage />}>
          <Route path='login' />
          <Route path='product' />
          <Route path='cart' />
          <Route path='register' />
          <Route path='product/details/:id' />
        </Route>}

        {/* admin  */}
        {isAuthenticated && <Route path='/admin' element={<Admin />}>
          <Route path='products' >
            <Route path='add' />
            <Route path='edit/:id' />
          </Route>
          <Route path='users' >
            <Route path='view/:id' />
          </Route>

          <Route path='orders' />
          <Route path='dashboard' />
        </Route>}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/admin" : "/"} />} />
      </Routes>
    </div>
  );
}

export default App;

