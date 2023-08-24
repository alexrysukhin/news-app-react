import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";

import { Header } from "../components/header/Header"
import { Footer } from "../components/Footer"
import { MainPage } from "../pages";
import { useAppSelector } from "../hook";
 
export const RootLayout = () => {
    // const currentTopic = useAppSelector(state => state.news.currentTopic);
    const [searchValue, setSearchValue] = useState("");

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