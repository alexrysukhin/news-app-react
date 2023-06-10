import { Link, useLocation, useParams } from "react-router-dom"

export const Post = () => {
    const location = useLocation();
    const post =  location.state.post;
    
    return (
        <>
            <h2>{post.webTitle}</h2>
            {post.fields.bodyText}

        </>
    )
}