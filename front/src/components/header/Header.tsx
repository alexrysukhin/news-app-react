import { HeaderInput } from "./HeaderInput"
import { HeaderMenu } from "./HeaderMenu"
import { Logo } from "./Logo"

interface IHeaderProps {
    searchValue: string;
    setSearchValue:(arg: string) => void
}

export const Header:React.FC<IHeaderProps> = ({searchValue, setSearchValue}) => {
    return (
        <header  className="header">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>
                    <HeaderInput searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <HeaderMenu />
            </div>
        </header>
    )
}