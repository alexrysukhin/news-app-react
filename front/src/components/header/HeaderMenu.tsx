import { useState } from "react";
import { MdBolt } from "react-icons/md"
import {motion} from "framer-motion"

import { Burger } from './Burger';
import { useAppDispatch, useAppSelector } from "../../hook";
import { setTopic } from '../../store/newsSlice';
import { Link } from "react-router-dom";


const variants = {
    visible: { y: 0 },
    hidden: { y: "-100px" },
}

const categoriesItems = ["Sport", "World", "Covid", "Business", "Politics", "Science", "Religion", "Health"]

export const HeaderMenu = () => {
    const dispatch = useAppDispatch();
    const currentTopic = useAppSelector(state => state.news.currentTopic);
    const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);
    
    const changeCategory = (category: string) => {
        dispatch(setTopic(category))
    }

    return(
        <div className="header-menu">

            <motion.div 
                className="menu__categories"
                animate={isBurgerClicked ? "visible" : "hidden"}
                variants={variants}
            >
                <div className="menu__item">
                    Categories
                    <div className="categories-dropdown">
                        <ul className="categories-list">
                            {categoriesItems.map((item, i) => (
                                <Link className="categories-link" to="/">
                                    <li key={i} onClick={()=>changeCategory(item)} className={currentTopic === item ? " categories-item categories-item__active" : "categories-item"}>
                                        {item}
                                    </li>

                                </Link>
                            ))
                          }
                        </ul>
                    </div>
                </div>
                <Link to="/">
                    <div className="menu__item" onClick = {() => dispatch(setTopic("trending"))}>
                        Trending News
                        <span>
                            <MdBolt style={{color: "yellow", fontSize: "14px"}}/>
                        </span>
                    </div>
                </Link>
            </motion.div>
            <Burger isBurgerClicked={isBurgerClicked} setIsBurgerClicked={setIsBurgerClicked}/>
        </div>
    )
}


