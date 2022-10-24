import React from 'react';
import { Link } from 'react-scroll';

const NavLandingDemo = () => {
    return (
        <ul className="mainmenu">
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="kelas"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Kelas
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="program"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Program
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="testimoni"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Testimoni
                </Link>
            </li>
        </ul>
    )
}

export default NavLandingDemo;