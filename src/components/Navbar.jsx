/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = ({totalCounter}) => {
    console.log('Navbar-render');
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Total of value in cart <span className="badge badge-pill badge-secondary">{totalCounter}</span>
          </a>
        </div>
      </nav>
       
    )
}

export default Navbar
