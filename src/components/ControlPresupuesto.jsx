import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos,setGastos,presupuesto,setPresupuesto,setIsValidPresupuesto}) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState();

    useEffect(() => {
        const totalGastado = gastos.reduce((total,gasto) => gasto.cantidad + total,0);
        const totalDisponible = presupuesto - totalGastado;
        //Porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);

        setPorcentaje(nuevoPorcentaje);
        setTimeout(() => {
        },500)

        setGastado(totalGastado);
        setDisponible(totalDisponible);

    },[gastos])
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }
    const resetPresupuesto = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if(resultado){
            setPresupuesto(0);
            setGastos([]);
            setIsValidPresupuesto(false);
            return;
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor:  porcentaje > 100 ? '#DC2626': '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={() => resetPresupuesto()}>
                Resetear presupuesto
            </button>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto