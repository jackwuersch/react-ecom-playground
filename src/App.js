import { Routes, Route } from 'react-router-dom';

import Header from './components/routes/header/header.component';
import Home from './components/routes/home/home.component';


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
