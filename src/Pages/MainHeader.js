import {Link} from 'react-router-dom'
import './MainHeader.css'
const MainHeader = () => {
    return(
        <header className="header">
            <ul> 
                
                <li><Link to="/demos">Demos</Link></li>
                <li><Link to="/newdemo">NewDemo</Link></li>
            </ul>
           


        </header>
    )
}

export default MainHeader;