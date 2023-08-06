import React,{ useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hook";
import { fetchNews } from '../store/newsSlice';
import { Post } from './Post';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const currentTopic = useAppSelector(state => state.news.currentTopic);
    const newsList = useAppSelector(state => state.news.newsList);

    useEffect(() => {
        dispatch(fetchNews(currentTopic));

    },[currentTopic])

    return(
        <>
            <div className="breaking-news">
                <div className="breaking-news-imageholder"></div>
            </div>

                <ul className="news-list">
                    {newsList.slice(1).map(post => {
                        const id = post.id.split("/").slice(-1)[0];
                        return <Link 
                                    to={id}
                                >
                                    <li className="news-item" key={post.id} >{post.webTitle}</li>
                                </Link>
                    })}
                    
                </ul>  
            </>
    )
}