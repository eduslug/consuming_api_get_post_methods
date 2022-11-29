import {Link} from "react-router-dom"
import "./navbar.css"
function NavBar() {
    return (
        <div>
            <nav className='navbar'>
                <h2>
                    <Link to={`/`}>Blog</Link>
                </h2>
                <ul>
                    <li >
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={`/new`} className='new-btn'>
                            Novo Post
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar