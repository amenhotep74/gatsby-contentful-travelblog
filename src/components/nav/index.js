import React from 'react'
import { navigate } from 'gatsby';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/code.svg';
import './nav.css'

const Nav = () => (
    <nav>
        <div className="nav__items">
            <Link to="/" className="nav__item--left">
                <div class="inside-links-left">
                    {/* <img src={logo} alt="Traveler Pack Logo" className="nav__item--logo"/> */}
                    <h2 class="navlogo">Bradley Lewis</h2>
                </div>
            </Link>
            <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/blog'>Blog</Link>
            <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/contact'>Contact</Link>
        </div>
    </nav>
)

export default Nav;