import { GoArrowUp } from "react-icons/go";

export const ButtonToTop = () => {

   const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };

   return (

      <button className="buttonToTop" onClick={scrollToTop}>
         <GoArrowUp className="button-to-top-icon"/>
      </button>
   )
}