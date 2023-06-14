export const generarId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return fechaNueva.toLocaleDateString('es-ES', opciones);
}