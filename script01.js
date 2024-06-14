
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};


function displayCarDetails(carObj) {
    for (const key in carObj) {
        console.log(`${key}: ${carObj[key]}`);
    }
}


displayCarDetails(car);
