import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainRoot from "./pages/MainRoot";
import Project from "./pages/Project";
import Services from "./pages/Services";
import VebProject from './companents/Projects/VebProject/Index'
import MobileProject from './companents/Projects/MobileProject/Index'

const ROUTES=[
   {
    path:"/",
    element:<MainRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"/projects",
            element:<Project/>
        },
        {
            path:"/services",
            element:<Services/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/vebproject",
            element:<VebProject/>
        },
        {
            path:"/mobileprojects",
            element:<MobileProject/>
        }
    ]
   }
]
export default ROUTES