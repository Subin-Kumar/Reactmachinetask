import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableP1 from './TableP1';

import Pie3 from './Pie3';


function App() {
  const router=createBrowserRouter([
    { 
      path:'/',
      element:<Dashboard/>
     },
     
     { 
      path:'tab',
      element:<TableP1/>
     },
    
     { 
      path:'pie3',
      element:<Pie3/>
     }
   ])
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
