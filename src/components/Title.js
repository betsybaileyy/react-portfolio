import { NavLink } from 'react-router-dom'
import React from 'react'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Betsy Bailey</h1>
        <div className="Title-Subtitle">Product Manager and Software Engineer</div>
        <a href="https://github.com/betsybaileyy" onclick="window.open('github.com/betsybaileyy', '_self');">Github</a>


        <div>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/about">About</NavLink>
          
        </div>

      </header>
    </div>
  )
}

export default Title