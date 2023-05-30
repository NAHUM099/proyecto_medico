function mostrarpacientes(){
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if(localpacientes){
        pacientes = JSON.parse(localpacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpotabla = tablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(persona =>{
        let fila = cuerpotabla.insertRow();
           
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = persona.nombre
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = 
        persona.apellido 
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent = persona.cedula 
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent = persona.edad 
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent = persona.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent = persona.especialidad
    });
}
mostrarpacientes()
