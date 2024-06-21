
import Home from "./components/Home";
import Rootlayout from "./Rootlayout";
// 

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
function App(){
  const router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
            },
            {
              path: "*",
              element: <Home/>
                },
               
            
           
              ] } ])
               
   
 
  return(
    <>
     <RouterProvider router={router} />
    </>
  );

}
export default App