var tareas = [
    {
        nya: "Flor Villalba",
        tarea : "hacer tarea",
        estado : "completado"
    }
]

function validarFormulario(){
    let nya = document.getElementById("nya").value
    let tarea = document.getElementById("descTarea").value
    let estado = document.getElementById("estadoTarea").value

    if(nya== "" || tarea=="" || estado == "null"){
        alert("No se permiten campos vacios o nulos")

    } else{
        return true;

    }
}

