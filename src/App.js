import {Redirect, Route} from 'react-router-dom';
import Header from './components/Header';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Route path='/' exact>
          <Redirect to='/welcome'/>
        </Route>
        <Route path='/welcome'>
          <Welcome/>
        </Route>
        <Route path='/product' exact>
          <Product/>
        </Route>
        <Route path='/product/:productId'>
          <ProductDetail/>
        </Route>
      </main>
    </div>
  );
}

export default App;
