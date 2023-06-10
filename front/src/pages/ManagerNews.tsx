import React,{ useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import { Post } from '../type';

interface IMainPageProps  {
    topic: string
}
 
export const MainPage:React.FC<IMainPageProps> = ({topic}) => {
    const posts = [{id:1, webTitle:"fakeTitle"}]
   
    return(
        <>
            lalal
            {/* <div className="breaking-news">
                <div className="breaking-news-imageholder"></div>
            </div>

                <ul className="news-list">
                    {posts.slice(1).map(post => (
                        <Link 
                        key={post.id} 
                        state={{post:post}} 
                        to={`/post`}
                        >
                            <li className="news-item">{post.webTitle}</li>
                    </Link>
                    ))}
                    
                </ul>  */}
            </>
    )
}