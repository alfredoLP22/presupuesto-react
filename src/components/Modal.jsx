import { useState } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleGasto = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje('');
      }, 3000);
    }

    guardarGasto({nombre,cantidad,categoria});
    ocultarModal();
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar-modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleGasto}
      >
        <legend>Nuevo gasto</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añande un nombre de gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añande la cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categorias</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir gasto" />
      </form>
    </div>
  );
};

export default Modal;
