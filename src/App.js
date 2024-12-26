import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import Home from './components/Home';
import Collection from './components/Collection';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Viewpage from './components/Viewpage';

function App() {
  const [ivalue, setivalue] = useState('');
  const [collection, setCollection] = useState([]);

  const addToCollection = (movie) => {
    if (!collection.find((item) => item.imdbID === movie.imdbID)) {
      setCollection((prevCollection) => [...prevCollection, movie]);
      toast.success("Added To Collection", {
        position: 'top-center', 
        
      });
      
      
    }
  };

  const removeMovie = (index) => {
    setCollection((prevCollection) =>
      prevCollection.filter((_, i) => i !== index)
    );
    toast.success("Removed From Collection")
  };

  const router = createBrowserRouter([

{

  path : '/',
  element : <div>
        <Navbar ivalue={ivalue} setivalue={setivalue}/>

    <Home ivalue={ivalue} addToCollection={addToCollection} />

  </div>
},
{
  path : '/my-collections',
  element :<div>
    <Navbar/>

    <Collection collection ={collection} removeMovie={removeMovie}/>
    

  </div>
}
,
{
  path :'/movie/:id',
  element : <div>
    <Navbar/>
    <Viewpage ivalue={ivalue} addToCollection={addToCollection} />
  </div>
}

  ])
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
