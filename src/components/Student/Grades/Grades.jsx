import React from 'react';
import './Grades.css';
import SWUser from '../../../assets/SW_user_default.png'
import useAuth from '../../../helpers/auth/UseAuth';
import SWGraph from '../../../assets/SW_grade_graphic.png'

const defaultGrades = [
  {
    name: "Matematicas",
    grade: "88.9"
  },
  {
    name: "Español",
    grade: "88.9"
  },
  {
    name: "Educacion fisica",
    grade: "78.2"
  },
  {
    name: "Química",
    grade: "78.2"
  }
]

export default function Grades() {
  const { user } = useAuth()
  return (
    <div className='grades__container' >
      <h3>Calificaciones</h3>
      <h2>2do Bimestre</h2>
      <div className='gradesList' >
        {
          defaultGrades.map(grade => (
            <div className='gradeContainer' >
              <p className='grade' >{grade.grade}</p>
              <p>{grade.name}</p>
            </div>
          ))
        }
      </div>
      <div className='grade_graphs' >
        <div>
          <img src={SWUser} alt={user.name} title='Schoolar Wide' width={100} height={100} />
          <p>{user.name}</p>
        </div>
        <img src={SWGraph} alt="Schoolar Wide" title='Schoolar Wide' width={100} height={100} />
      </div>
    </div>
  )
}
