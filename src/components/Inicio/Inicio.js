import './Inicio.css';

export default function Inicio(){
    return <div className='inicioContainer'>
        <div className='inicioText'>
            <h2 className='inicioTitle'>Bienvenido al Portal de Usuario</h2>
            <h3 className='inicioInfo'>Seleccione una de las opciones a continuación</h3>
        </div>
        <img src='./users.png' alt='users' className='usersLogo'></img>
    </div>
}