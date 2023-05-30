const registroPacientes = document.getElementById("registroPersona")
const persona = document.getElementById("persona")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedulapac")
const edad = document.getElementById("edadPaciente")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidadPaciente")

registroPacientes.addEventListener("submit", function(event){
    event.preventDefault()
    const objetopaciente = {
        nombre: persona.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if(localpacientes){
        pacientes = JSON.parse(localpacientes)
    }
    pacientes.push(objetopaciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    registroPacientes.reset()
    alert("paciente registrado con exito")
})