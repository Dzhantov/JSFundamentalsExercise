function listEmployees(array){

    let empoloyeeData = {};

    array.forEach(employee => {
        let personalNumber = employee.length;

        empoloyeeData[employee] = personalNumber;
    });

    for(let employee in empoloyeeData){
        console.log(`Name: ${employee} -- Personal Number: ${empoloyeeData[employee]}`);
        
    }
}