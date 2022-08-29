import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='btn btn-primary' to='/'>
                  Back To Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
