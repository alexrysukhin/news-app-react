import React,{ useEffect, useRef, useState } from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { FirstNews } from '../components/mainPage/FirstNews';
import dayjs from 'dayjs';

import { useAppDispatch, useAppSelector } from "../hook";
import { fetchNews } from '../store/newsSlice';
import { Post } from './Post';
import { NewsItem } from '../components/mainPage/NewsItem';
import { Loader } from '../components/Loader';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const currentTopic = useAppSelector(state => state.news.currentTopic);
    const newsList = useAppSelector(state => state.news.newsList);
    const loading = useAppSelector(state => state.news.loading);

    useEffect(() => {
        dispatch(fetchNews(currentTopic));

    },[currentTopic]);

    useEffect(() => {console.log(newsList)}, [newsList])

    const cutTitle= (title: string) => {
        return  `${title.split(' ').slice(0, 15).join(" ")}...` 
    }

    const cutDescription = (description: string) => {
        return description ?  `${description.split(' ').slice(0, 15).join(" ")}...` : "description"
    }

    const dateFormating = (date: string) => {
            return date ? dayjs(date).format("MMM D, YYYY") : ""
    }
    const makeId = (id:string) => {
        return id.split("/").slice(-1)[0]
    }



    return(
        <>
            {!newsList.length ? 
                <Loader />: 
                <>
                    <FirstNews 
                        title={newsList[0]?.webTitle} 
                        description={cutDescription(newsList[0]?.fields.bodyText)} 
                        date={dateFormating(newsList[0].webPublicationDate)} 
                        image={newsList[0]?.fields?.thumbnail}
                        id={makeId(newsList[0].id)}
                    />   

                    <ul className="news-list">
                        {newsList.slice(1).map(post => {
                          
                            return <NewsItem 
                                id={makeId(post.id)} 
                                title={cutTitle(post.webTitle)}
                                desc={cutDescription(post.fields.bodyText)}
                                date={dateFormating(dateFormating(post.webPublicationDate))}
                                image={post.fields.thumbnail}
                            />
                            
                        })}
                    </ul>  
                </>
            }
        </>
    )
}