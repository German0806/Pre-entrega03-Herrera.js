// Definición del constructor Empleado
function Empleado(nombre, departamento, salario) {
    this.nombre = nombre;
    this.departamento = departamento;
    this.salario = salario;
}

// Array vacio para almacenar los empleados
const empleados = [];

document.addEventListener('DOMContentLoaded', function() { 

    const formulario = document.getElementById('formularioEmpleado');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarEmpleado(); o
    });
});

// Función para agregar un nuevo empleado
function agregarEmpleado() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const departamento = document.getElementById('departamento').value;
    const salario = parseFloat(document.getElementById('salario').value);

    const empleado = new Empleado(nombre, departamento, salario);

    empleados.push(empleado);

    mostrarEmpleados();

    formularioEmpleado.reset();

    // Mostrar un mensaje en la consola
    console.log('¡Empleado agregado con éxito!');
}

// Función para mostrar la lista de empleados
function mostrarEmpleados() {
    // Obtener el elemento donde se mostrarán los resultados
    const resultadosDiv = document.getElementById('resultados');

    // Limpiar los resultados anteriores
    resultadosDiv.innerHTML = '';

    // Crear una lista desordenada para mostrar los empleados
    const listaEmpleados = document.createElement('ul');

    // Iterar sobre el array de empleados y crear un elemento de lista para cada uno
    empleados.forEach(empleado => {
        const itemEmpleado = document.createElement('li');
        itemEmpleado.textContent = `Nombre: ${empleado.nombre}, Departamento: ${empleado.departamento}, Salario: $${empleado.salario}`;
        listaEmpleados.appendChild(itemEmpleado);
    });

    // Agregar la lista de empleados al elemento donde se mostrarán los resultados
    resultadosDiv.appendChild(listaEmpleados);
}

