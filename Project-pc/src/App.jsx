
import Home from "./components/Home";
import Projects from "./components/Projects";
import SignUp from "./components/SignUp";
import Notfound from "./Notfound";
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
          path: "/home/*",
          element: <Home/>
            },
            {
              path: "*",
              element: <Notfound/>
                },
                
                    
                

                    
           ] } ])
               
   
 
  return(
    <>
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden "> 
     <RouterProvider router={router} />

    </div>
    </>
  );

}
export default App