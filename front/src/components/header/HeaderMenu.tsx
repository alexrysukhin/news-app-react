import { useState } from "react";
import { MdBolt } from "react-icons/md"
import {motion} from "framer-motion"

import { Burger } from './Burger';

const variants = {
    visible: { y: 0 },
    hidden: { y: "-100px" },
}

const categoriesItems = ["Sport", "World", "Covid", "Business", "Politics", "Science", "Religion", "Health"]

export const HeaderMenu = () => {
    const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    
    const changeCategory = (category: string) => {
        setSelectedCategory(category)
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
                              <li key={i} onClick={()=>changeCategory(item)} className={selectedCategory === item ? " categories-item categories-item__active" : "categories-item"}>{item}</li>
                            ))
                          }
                        </ul>
                    </div>
                </div>
                <div className="menu__item">
                    Trending News
                     <span><MdBolt style={{color: "yellow", fontSize: "14px"}}/></span></div>
            </motion.div>
            <Burger isBurgerClicked={isBurgerClicked} setIsBurgerClicked={setIsBurgerClicked}/>
        </div>
    )
}