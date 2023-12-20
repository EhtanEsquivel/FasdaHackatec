import React from 'react'
import useAuth from '../../helpers/auth/UseAuth'
import './Header.css'
import { Link } from 'react-router-dom';
import SWLogo from '../../assets/logos/LOGO_SW.png'
import routes from '../../router/routes';

export default function Header() {
    const { user } = useAuth();
    return (
        <header>
            {
                user ? <div>
                    <p>userimage</p>
                </div> : <div>
                    <Link to={routes.login} >
                        Login
                    </Link>
                    <button>SignUp</button>
                </div>
            }
        </header>
    )
}