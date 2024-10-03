var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];

function print(employees) {
    for (let i = 0; i < employees.length; i++) {
        alert(employees[i].id + ",  " + employees[i].name + ',  ' + employees[i].department)
    }
}

function printCopia(employees) {
    for (let i = 0; i < employees.length; i++) {
        alert(`${employees[i].id}, ${employees[i].name}, ${employees[i].department}`)
    }
}

function createTable() {
    //Crear tabla y body
    let table = document.createElement("table");
    // let header = document.createElement("head");

    //Bucle para crear los rows
    for (let i = 0; i < employees.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${employees[i].id}</td>, <td>${employees[i].name}</td>, <td>${employees[i].department}</td>`
        table.appendChild(row)
    }
    document.getElementById("table-container").append(table);
}

function createTableForEeach(data) {
    //Crear tabla y body
    let table = document.createElement("table");

    //Bucle para crear los rows
    data.forEach(employees => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${employees.id}</td>, <td>${employees.name}</td>, <td>${employees.department}</td>`
        table.appendChild(row)
    })
    document.getElementById("table-container").append(table);
}