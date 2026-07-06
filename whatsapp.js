window.crearMensajeWhatsApp = function(d){

return `Hola, deseo consultar el precio del siguiente lote:

Lote: ${d.lote}
Ubicación: ${d.ubicacion} - ${d.etapa}
Área: ${d.area}

Nombre: ${d.nombre}
Email: ${d.correo}
Teléfono: ${d.telefono}

Mensaje:
${d.mensaje}`;

};
