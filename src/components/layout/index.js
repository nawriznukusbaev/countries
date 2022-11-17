import MenuAppBar from "../header";
import {Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <MenuAppBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export  default  Layout