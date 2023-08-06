import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { useAppSelector } from "../hook";
import { News } from "../models";

export const Post = () => {
    const location = useLocation();
    const { id } = useParams();
    const newsList = useAppSelector(state => state.news.newsList);
    const [post, setPost] = useState<News | null>()

    useEffect(() => {
        const getId = (id:string) => id.split("/").slice(-1)[0];
        const post = newsList.find(_ => {
            if(getId(_.id) === id) {
                return _
            }
        })
        setPost(post);
    }, [])

    return (
        <>
            <h2>{post?.webTitle}</h2>
        </>
    )
}