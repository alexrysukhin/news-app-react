import { Link } from "react-router-dom"

export const NotFound = () => {
   return(
      <div className="className">
         <h2>Page not found.</h2>
         <p>Go to the <Link to="">home page</Link>.</p>
      </div>
   )
}