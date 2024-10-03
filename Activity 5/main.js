function generateTable(e) {
    //tablearS
    e.preventDefault();

    //Sacar las variables
    let row = document.getElementById("rows").value;
    let colum = document.getElementById("colums").value;

    //crear elementos del div y container
    let cont = document.getElementById("container");
    let table = document.createElement("table")

    //añadir la tabla al divS
    cont.appendChild(table);

    for (let i = 0; i < row; i++) {
        //añadir las filas a la tabla
        let contRow = document.createElement("tr");
        table.appendChild(contRow);
        let innerHTML = '';
        for (let j = 0; j < colum; j++) {
            innerHTML += "<td>" + "Fila:" + i + ',' + "Columna:" + j +  "</td>";
        }
        contRow.innerHTML = innerHTML;
    }
    // debugger;

}