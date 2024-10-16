// $(document).ready(function () {
//    $.ajax({
//         url: 'employees.json',
//         method: 'GET',
//         dataType: 'json',
//         success: function (data) {
//Iniciar una variable que contenga una variable con la estructura de la tabla
//             let table = '<table class= "table><thead><th>Id</th><th>Name</th><td>deparment</th></thead><tbody>">'

//Usar funcion $.each
//             $.each(data, function (index, employee) {
//Agregar una fila
//                 table += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.department}</td></tr>`;
//             }); //Fin del bucle y de mi vida
//             table += '</tbody></table>';
//             $('#table-container').html(table);
//         }, //cierro success
//     })
// })

