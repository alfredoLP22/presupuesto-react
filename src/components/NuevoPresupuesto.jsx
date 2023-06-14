import { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

  const [mensaje, setMensaje] = useState('');
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if(!presupuesto || presupuesto < 0) {
        setMensaje("Presupuesto no valido");
        return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label htmlFor="">Definir presupuesto {presupuesto}</label>
                <input 
                    className='nuevo-presupuesto'
                    type="number"
                    placeholder='Añade tu presupuesto'
                    onChange={(e) => setPresupuesto(Number(e.target.value))}
                    value={presupuesto}
                />
            </div>

            <input type="submit" value="Añadir" />
            { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto