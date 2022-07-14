import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import AppAdmin from './layouts/Admin/Admin';


function App() {
  return (
    <div className="app">
      <HomePage />
      <Routes>
        <Route path='/asfsa' element={<AppAdmin />} />
      </Routes>
    </div>
  );
}

export default App;

