import React, { useEffect } from 'react'
import useAuth from '../../helpers/auth/UseAuth'
import './SideBar.css';
import SWLogo from '../../assets/logos/LOGO_SW.png'
import { Link } from 'react-router-dom';

export default function SideBar() {
    const { user, logout } = useAuth();
    const location = window.location.pathname;
    useEffect(() => {
    }, [])

    return (
        <div className='container' >
            <img src={SWLogo} alt="SchoolarWide" width={100} height={100} />
            <nav className='sideMenu' >
                {
                    user.rol === "admin" ? <>
                        <p>Nombre de la institucion</p>
                        <p>Docentes</p>
                        <p>Calificaciones y evaluaciones</p>
                        <p>Comunicados y citatorios</p>
                    </> : <>
                        <Link to='/home/grades' >
                            <p className={location.split('/')[location.split.length] === "grades" && "whiteBack"} >Calificaiones y Evaluaciones</p>
                        </Link>
                        <Link to={'/home/tramit'} >
                            <p className={location.split('/')[location.split.length] === "tramit" && "whiteBack"} >Tramites</p>
                        </Link>
                        <Link to={'/home/comments'} >
                            <p className={location.split('/')[location.split.length] === "comments" && "whiteBack"} >Observaciones y Comentarios</p>
                        </Link>
                        <Link to={'/home/announsment'} >
                            <p className={location.split('/')[location.split.length] === "announsment" && "whiteBack"} >Comunicados y citatorios</p>
                        </Link>
                    </>
                }
            </nav>
            <button onClick={logout} >Cerrar sesion</button>
        </div>
    )
}
