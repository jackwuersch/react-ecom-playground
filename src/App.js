import { Routes, Route } from 'react-router-dom';

import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import SignIn from './routes/authentication/authentication.component';


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
        <Route path='shop' element={<Shop />}></Route>
        <Route path='auth' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
