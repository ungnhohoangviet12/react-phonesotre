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
      </Routes>
    </div>
  );
}

export default App;

