
import Home from "./Components/Home";
import Rootlayout from "./Rootlayout";
import Compiler from "./Components/Compiler";
import Notfound from "./Components/Notfound";

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
              element: <Notfound/>
                },
                {
                  path: "compiler",
                  element: <Compiler/>
                    },
            
           
              ] } ])
               
   
 
  return(
    <>
     <RouterProvider router={router} />
    </>
  );

}
export default App