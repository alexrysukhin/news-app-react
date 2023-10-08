import { Link } from "react-router-dom"
import { ReadMoreButton } from "../ReadMoreButton"

interface INewsItemProps {
   id: string,
   title: string,
   desc: string,
   date: string,
   image: string
}

export const NewsItem:React.FC<INewsItemProps> = ({id, title, desc,date, image}) => {
   return(
            <li className="news-item" key={id} >
               <div className="news-item-image-holder">
               <Link to={id}>
                  <img src={image} alt="news-image" />
               </Link>
               </div>
               <div className="news-item-content">
                  <h3 className="news-item-content-title">{title}</h3>
                  <p className="news-item-content-desc">{desc}</p>
                  <div className="news-item-content-footer">
                     <span className="news-item-content-date">{date}</span>
                     <ReadMoreButton id={id} />
                  </div>
               </div>
            </li>
   )
}