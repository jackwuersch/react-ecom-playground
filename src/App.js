import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './components/pages/home/home.component';

const Header = () => {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return (
    <div>
        <h1>Shop</h1>
    </div>
  )
}

const App = () =>  {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
