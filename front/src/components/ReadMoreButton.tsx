import { Link } from "react-router-dom"

interface IReadMoreButton {
   id: string
}

export const ReadMoreButton: React.FC<IReadMoreButton> = ({id}) => {
   return <Link className="read-more-button" to={id}>Read more</Link>
}