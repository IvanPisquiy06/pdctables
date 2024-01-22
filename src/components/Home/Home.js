import './Home.css';
import Inicio from '../Inicio/Inicio';
import Pais from '../Pais/Pais';
import Depto from '../Depto/Depto';
import Persona from '../Persona/Persona';
import { useState } from 'react';

export default function Home(){
    const components = [<Inicio />, <Pais />, <Depto />, <Persona />]

    const [isShown, setIsShown] = useState(components[0]);

    const showInicio = e => setIsShown(components[0]);

    const showPais = e => setIsShown(components[1])

    const showDepto = e => setIsShown(components[2]);

    const showPersona = e => setIsShown(components[3]);
    return <>
        <div className="header">
            <img src='./Logo.jpg' className='logo' alt='logo'></img>
            <div className="buttons">
                <button onClick={showInicio} className="btn">Inicio</button>
                <button onClick={showPais} className="btn">Paises</button>
                <button onClick={showDepto} className="btn">Departamentos</button>
                <button onClick={showPersona} className="btn">Personas</button>
            </div>
        </div>
        { isShown }
    </>
}