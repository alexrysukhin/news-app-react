import React from "react";
import { Link } from "react-router-dom";
import { ReadMoreButton } from "../ReadMoreButton";

interface IFirstNewsProps {
   title: string,
   description: string,
   date: string,
   image: string,
   id: string
}

export const FirstNews:React.FC<IFirstNewsProps> = ({title, description,date,image, id}) => {
   return (
      <div className="first-news">
         <div className="first-news-content">
            <h2 className="first-news-content-title">{title}</h2>
            <p className="first-news-content-desc">{description}</p>
            <div className="first-news-content-footer">
               <span className="first-news-content-date">{date}</span>
               <ReadMoreButton id={id} />
            </div>
         </div>
         <div className="first-news-image-holder">
            <img src={image} alt="news-image" />
         </div>
      </div>
   )
}