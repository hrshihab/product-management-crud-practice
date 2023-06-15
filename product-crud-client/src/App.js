import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Main from './layout/Main';
import Products from './components/Products';
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path:'/add',
        element:<AddProduct></AddProduct>
      },{
        path:'/products/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  }
  
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
