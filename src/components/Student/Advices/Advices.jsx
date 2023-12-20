import React from 'react';
import SWAdvices from '../../../assets/SW_advices.png'

export default function Advices() {
  return (
    <div>
        <h2 style={{color: "#000", fontWeight: "200", fontSize: "2rem"}} >Avisos</h2>
        <br />
        <br />
        <br />
        <img src={SWAdvices} alt="Schoolar Wide" title='Schoolar Wide' width={100} height={100}
            style={{width: "100%", height: "auto"}}
        />
    </div>
  )
}
