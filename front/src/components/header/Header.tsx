import { HeaderInput } from "./HeaderInput"
import { HeaderMenu } from "./HeaderMenu"
import { Logo } from "./Logo"

export const  Header = () => {
    return (
        <header  className="header">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>
                    <HeaderInput />
                    <HeaderMenu />
            </div>
        </header>
    )
}