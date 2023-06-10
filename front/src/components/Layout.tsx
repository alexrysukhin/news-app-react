import { Outlet } from "react-router-dom";

import { Header } from "./header/Header"
import { Footer } from "./Footer"
 
export const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="container">
                    <Outlet />
                    <div className="empty"></div>
                </div>
            </div>
            <Footer/>

        </>
    )
}