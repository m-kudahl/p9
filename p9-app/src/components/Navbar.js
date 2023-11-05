import './navbar.css'

export default function Navbar () {
    return ( 
        <nav className="navbar">
            <ul>
                <li className="active">
                    <a href="/Home">Home</a>
                </li>
                <li className="inactive">
                    <a href="/Setup">Setup</a>
                </li>
            </ul>
        </nav>
     )
  }
