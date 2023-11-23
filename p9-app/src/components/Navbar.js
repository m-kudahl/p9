import './navbar.css'

export default function Navbar () {
    return ( 
        <nav className="Navbar">
            <ul>
                <li className="Active">
                    <a href="/Home">HOME</a>
                </li>
                <li className="Inactive">
                    <a href="/Setup">SETUP</a>
                </li>
            </ul>
        </nav>
     )
  }
