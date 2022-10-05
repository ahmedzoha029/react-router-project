import { Link } from 'react-router-dom'

function MainNavigation(){
  return(
    <header>
      <h1> React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorite-meetups">Favorite Meetups</Link>
          </li>
          <li>
            <Link to="new-meetups">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;