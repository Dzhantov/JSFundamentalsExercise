function parkingLot(array){
    parkingCondition = [];

    array.forEach(car => {
        let [carDirection, carNumber] = car.split(', ');

        if(carDirection === 'IN'){
            if(!parkingCondition.includes(carNumber)){
                parkingCondition.push(carNumber);
            }
        }

        if(carDirection === 'OUT'){
            parkingCondition = parkingCondition.filter(num => num !== carNumber);
        }
    });
    parkingCondition.sort();
    
    if(parkingCondition.length >=1){
        parkingCondition.forEach(carNumber => {
            console.log(carNumber);
        });
    }else{
        console.log('Parking Lot is Empty');
    }
}