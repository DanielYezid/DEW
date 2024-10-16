function generateTable(e) {
    //tablearS
    e.preventDefault();

    //Sacar las variables
    let rowEl = document.getElementById("rows").value;
    let columEl = document.getElementById("colums").value;

    //crear elementos del div y container
    let cont = document.getElementById("container");
    let table = document.createElement("table")

    //añadir la tabla al divS
    cont.appendChild(table);

    for (let i = 0; i < rowEl; i++) {
        //añadir las filas a la tabla   
        let controwEl = document.createElement("tr");
        table.appendChild(controwEl);
        let innerHTML = '';
        for (let j = 0; j < columEl; j++) {
            innerHTML += "<td>" + "Fila:" + i + ',' + "columElna:" + j + "</td>";
        }
        controwEl.innerHTML = innerHTML;
    }
    // debugger;

}