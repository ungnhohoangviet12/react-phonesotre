import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './layouts/Admin/Admin';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='' element={<HomePage />}>
          <Route path='login' />
          <Route path='cart' />
          <Route path='register' />
          <Route path='login' />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='products' />
          <Route path='users' />
          <Route path='orders' />
          <Route path='dashboard' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

