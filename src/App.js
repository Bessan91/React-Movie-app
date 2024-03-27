
import './App.css';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Login from './Components/Login/Login.jsx';
import Regiester from './Components/Regiester/Regiester.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Movie from './Components/Movie/Movie.jsx';
import MovieLayout from './Components/Movie/MovieLayout.jsx'

function App() {

  const router =createBrowserRouter([
    {
      path:'',element:<Layout/>,
      errorElement:<NotFound/>,
      children:[
      {index:true,element:<Home/>},
      // { path:'Movie',element:<Movie/> },
      {path:'Login',element:<Login/>},
      {path:'Regiester',element:<Regiester/>},
      {path:'Footer',elementle:<Footer/>},
      {path:'*',element:<NotFound/>}


      ]
    },
    {
      path:'Movie',element:<MovieLayout/> ,
      children:[
        {index:'Movie',element:<Movie/>}
  
  
        ]},
    
    ]);


  
  // https://api.themoviedb.org/3/trending/movie/week?api_key=ba1ee804a3ac23307f3d7704641a1c99
  return (
  <>
 

<RouterProvider  router={router}></RouterProvider>


  </>
  )
}

export default App;
