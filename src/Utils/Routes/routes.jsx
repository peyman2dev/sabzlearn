import Auth from "../../Pages/Auth";
import Home from "../../Pages/Home";

const routes = [
    {
        path: "",
        element: <Home />
    },
    {
        path: "/auth/:method",
        element: <Auth />
    }
]


export default routes