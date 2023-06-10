import { motion } from "framer-motion"

interface IBurgerProps {
    setIsBurgerClicked(arg: boolean):void
    isBurgerClicked: boolean
}

export const Burger:React.FC<IBurgerProps> = ({setIsBurgerClicked, isBurgerClicked}) => {
    return(
        <div className="burger" onClick={()=> setIsBurgerClicked(!isBurgerClicked)}>
            <motion.span 
                className="burger-line"
                animate={{
                    rotate: isBurgerClicked ? 45 : 0,
                    y: isBurgerClicked ? "5px" : 0
                }}
            ></motion.span>
            <motion.span 
                className="burger-line"
                animate={{opacity: isBurgerClicked ? 0 : 1}}
                transition={{duration: 0.1}}
            ></motion.span>
            <motion.span 
                className="burger-line"
                animate={{
                    rotate: isBurgerClicked ? -45 : 0,
                    y: isBurgerClicked ? "-5px" : 0
                }}
            ></motion.span>
        </div>
    )
}