import React from 'react';
import SWInscription from '../../../assets/tramits/SW_inscription.png';
import SWConstance from '../../../assets/tramits/SW_constance.png';
import SWCredit from '../../../assets/tramits/SW_credits.png';
import SWService from '../../../assets/tramits/SW_social_service.png';
import './StudentTramit.css'

export default function StudentTramit() {
    return (
        <div className='studentTramit' >
            <div>
                <h3>Tramites</h3>
                <h2>Escolares</h2>
            </div>
            <div className='tramit_list'>
                <div>
                    <img src={SWInscription} alt="Schoolar Wide" title='Schoolar Wide' width={100} height={100} />
                    <p>Tramites</p>
                </div>
                <div>
                    <img src={SWConstance} alt="Schoolar Wide" title='Schollar Wide' width={100} height={100} />
                    <p>Constancias</p>
                </div>
                <div>
                    <img src={SWService} alt="Schoolar Wide" title='Schollar Wide' width={100} height={100} />
                    <p>Servicio Social</p>
                </div>
                <div>
                    <img src={SWCredit} alt="Schoolar Wide" title='Schollar Wide' width={100} height={100} />
                    <p>Creditos Academicos</p>
                </div>
            </div>
        </div>
    )
}
