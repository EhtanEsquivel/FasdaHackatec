import React from 'react';
import './LandingPag.css';
import SWLogo from '../../assets/logos/LOGO_SW.png';
import Header from '../../components/Headers/Header';
import SWControl from '../../assets/landPage/SW_control.png';
import SWTutor from '../../assets/landPage/SW_tutors.png';
import SWGrades from '../../assets/landPage/SW_grades.png';
import SWParents from '../../assets/landPage/SW_parents.png';
import SWAnnouncement from '../../assets/landPage/SW_announcement.png';

export default function LandingPag() {
  return (
    <div className='land__main__ScWi' >
      <Header />
      <div className='land__main__init' >
        <img src={SWLogo} alt="Schoolar Wid" width={100} height={100} />
      </div>
      <div className="land__main__sect__ScWi">
        <div>
          <strong><h2>¿QUÉ ES SCHOLLAR WIDE?</h2></strong>
        </div>
        <div>
          <p>Nam bibendum bibendum lorem, in fringilla dui maximus vitae. Sed sed nisi id mi consequat cursus quis id enim. Mauris et velit pretium libero blandit vulputate vel vitae ante. Vivamus blandit semper mollis. Donec eu ante non odio facilisis mollis non nec nulla. Cras dictum egestas dolor, a rhoncus felis ultricies ut. Vestibulum in euismod nulla. Aliquam mollis faucibus orci. Sed varius ante ac ligula dignissim semper. Aenean luctus pulvinar magna, sit amet fringilla sem elementum sed. Nam rutrum facilisis mauris a vulputate.</p>
        </div>
      </div>
      <div className='land__main__sect__ScWi' >
        <div>
          <h2>Control de Materias</h2>
          <p>Con esta característica, los administradores o docentes pueden organizar y administrar las asignaturas o materias que se imparten en la institución educativa.</p>
          <p>Esto incluye programación de clases, asignación de recursos didácticos y seguimiento del contenido impartido en cada materia.</p>
        </div>
        <div>
          <img src={SWControl} alt="Schoolar Wide" width={100} height={100} />
        </div>
      </div>
      <div className='land__main__sect__ScWi' >
        <div>
          <img src={SWTutor} alt="Schoolar Wide" width={100} height={100} />
        </div>
        <div>
          <h2>Control de Grupo Tutorados</h2>
          <p>Esta función permite crear y gestionar grupos de tutorías, lo que facilita el seguimiento y apoyo personalizado a los estudiantes que requieran atención especial o seguimiento académico adicional.</p>
        </div>
      </div>
      <div className='land__main__sect__ScWi' >
        <div>
          <h2>Control de Calificaciones y Evaluaciones</h2>
          <p>Con esta herramienta, es posible registrar, actualizar y consultar las calificaciones y evaluaciones de los estudiantes de manera rápida y precisa.</p>
          <p>Esto facilita la identificación de áreas de mejora y el reconocimiento del desempeño académico de cada alumno.</p>
        </div>
        <div>
          <img src={SWGrades} alt="Schoolar Wide" width={100} height={100} />
        </div>
      </div>
      <div className='land__main__sect__ScWi' >
        <div>
          <img src={SWParents} alt="Schoolar Wide" width={100} height={100} />
        </div>
        <div>
          <h2>Acceso para Padres de Familia</h2>
          <p>Esta funcionalidad proporciona a los padres o tutores legales acceso a información relevante sobre el progreso académico, asistencia y comportamiento de sus hijos.</p>
          <p>Esto promueve la participación activa de los padres en la educación de sus hijos y fortalece la colaboración entre la institución educativa y las familias.</p>
        </div>
      </div>
      <div className='land__main__sect__ScWi' >
        <div>
          <h2>Comunicados y Citatorios</h2>
          <p>Esta herramienta facilita la comunicación entre la institución educativa, docentes, estudiantes y padres de familia mediante el envío de comunicados, noticias, avisos y citatorios de manera eficiente y oportuna.</p>
          <p>Esto asegura que la información relevante llegue a todos los involucrados de manera clara y organizada.</p>
        </div>
        <div>
          <img src={SWAnnouncement} alt="Schoolar Wide" width={100} height={100} />
        </div>
      </div>

    </div>
  )
}
