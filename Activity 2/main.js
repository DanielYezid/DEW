const OPERATIONS = [
    {operation: "push", data: [[1, 2, 3], 4]},
    {operation: "+", data: [1, 2, 3]},
    {operation: "+", data: [3]},
    {operation: "*", data: [2, 3]},
    {operation: "filter", data: [[1, 2, 3], 3]},
    {operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]]},
];

function opSum(data) {
    let sum = 0;
    data.forEach(num => sum += num)
    return sum;
}

function opMul(data) {
    let mul = 1;
    data.forEach(num => {
        mul *= num;
    })
    return mul;
}

// function opMulM(data) {
//     return data.reduce(
//         (acc, curr) => acc * curr,
//         1
//     );
// }

function opPush(data) {
    let auxiliary = data[0];
    for (let i = 1; i < data.length; i++) {
        auxiliary.push(data[i])
    }
    return auxiliary;
}

// function opPush2(data) {
//     return data.reduce(
//         (acc,curr) => [...acc, curr],
//         []
//     );
// }

function opMerge(data) {
     return data.reduce(
        (acc,curr) => [...acc, ...curr],
        []
    );
}

// function opMergeC(data) {
//     return [].concat(...data);
// }

function opFilter(data) {
    
}

// function opFilterF(data) {
//     return !data.filter(data[0])
// }


function batchProcessing(operations) {
    //write your JS code here:

    for (let i = 0; i < operations.length; i++) {
        const op = operations[i]

        switch (op.operation) {
            case "+":
                opSum(op.data);
                break;
            case "*":
                opMul(op.data);
                break;
            case "push":
                opPush(op.data);
                break;
            case "merge":
                opMerge(op.data);
                break;
            case "filter":
                opFilter(op.filter);
                break;
        }
    }


    operations.forEach()
}

