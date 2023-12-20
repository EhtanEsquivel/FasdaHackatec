import React from 'react';
import SWComents from '../../../assets/SW_coments.png'

export default function StudentComents() {
    return (
        <div style={{ color: "#000" }} >
            <h3 style={{ color: "#000", fontWeight: "100", fontSize: "1.5rem" }} >Observaciones</h3>
            <h2 style={{ color: "#000", fontSize: "2rem" }} >Mensajes (3)</h2>
            <center>
                <img src={SWComents} alt="Schoolar Wide" width={100} height={100}
                    style={{ width: "90%", height: "auto" }}
                />
            </center>
        </div>
    )
}
