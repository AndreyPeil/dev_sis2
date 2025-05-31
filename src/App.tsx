import './App.css'
import Create_account from './Pages/Create_account';
import Landing from './Pages/Landin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main_shopping from './Pages/Main_shopping';
import ProductsListing from './Pages/Products_listing';
import ProductDetail from './Pages/Product_detail';
import ShoppingAddress from './Pages/Shopping_adress';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import To_recivepag from './Pages/To_recive';
import NotFound from './Pages/quadrocentrosequtro';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create_account/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/shopping' element={<Main_shopping/>}/>
          <Route path='/products_listing' element={<ProductsListing/>}/>
          <Route path='/product/:titile' element={<ProductDetail/>}/>
          <Route path='/costumer/adress' element={<ShoppingAddress/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/receive' element={<To_recivepag/>}/>
           <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App