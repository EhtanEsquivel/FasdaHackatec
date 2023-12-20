import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../../components/sideBar/SideBar'
import './Home.css'
import Grades from '../../components/Student/Grades/Grades'
import useAuth from '../../helpers/auth/UseAuth'
import StudentTramit from '../../components/Student/tramits/StudentTramit'
import StudentComents from '../../components/Student/coments/StudentComents'
import Advices from '../../components/Student/Advices/Advices'

export default function Home() {
  const { user } = useAuth();
  const today = new Date()

  return (
    <div className='main__background' >
      <SideBar />
      <div className='home__content__SW' >
        <div className='welcomeBar' >
          <h2>Bienvenido {user.name}</h2>
          <p>Hoy es {today.getDate()} de {month[today.getMonth() - 1]} de {today.getFullYear()}</p>
        </div>
        <Routes>
          <Route exact path='/grades/*' element={<Grades />} />
          <Route exact path='/tramit/*' element={<StudentTramit />} />
          <Route exact path='/comments/*' element={<StudentComents />} />
          <Route exact path='/announsment/*' element={<Advices />} />
        </Routes>
      </div>
    </div>
  )
}
const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"]