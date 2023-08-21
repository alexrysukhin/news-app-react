import dayjs from "dayjs";
import parse from 'html-react-parser'
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { useAppSelector } from "../hook";
import { News } from "../models";

export const Post = () => {
    const location = useLocation();
    const { id } = useParams();
    const newsList = useAppSelector(state => state.news.newsList);
    const [post, setPost] = useState<News | null>();
    const date = dayjs(post?.webPublicationDate).format("MMM D, YYYY");
    const [content, setContent] = useState("");

    useEffect(() => {
        const getId = (id:string) => id.split("/").slice(-1)[0];
        const post = newsList.find(_ => {
            if(getId(_.id) === id) {
                return _
            }
        })
        setPost(post);
    }, []);;

    useEffect(() => {
        if(post?.fields){
            setContent(post.fields.body)
        }
    }, [post])


    

    return (
        <>
            <div className="post-image-holder">
                <img src={post?.fields.thumbnail} alt="" />
            </div>
            <h1 className="post-title">{post?.webTitle}</h1>
            <div className="post-info-block">
                <span className="authot-name">{post?.fields.byline}</span>
                <span className="post-date">{date}</span>
            </div>
            <div className="post-content">
                {parse(content)}
            </div>
        </>
    )
}