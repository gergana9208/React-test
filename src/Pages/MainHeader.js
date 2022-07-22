import {NavLink} from 'react-router-dom'
import './MainHeader.css'
const MainHeader = () => {
    return(
        <header className="header">
            <ul>
                <li><NavLink  to="/demos">Demos</NavLink></li>
                <li><NavLink to="/newdemo">NewDemo</NavLink></li>
            </ul>
        </header>
    )
}

export default MainHeader;