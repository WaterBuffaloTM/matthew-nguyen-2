console.log("Welcome to View!");

const cars = [
	{
    	    make: "Volvo",
        model: "C40 Recharge"
	}, 
    {
	    make: "Ford",
        model: "Raptor"
	}, 
    {
        make: "Toyota",
        model: "Camry"
	}, 
    {
		make: "Mercedes",
        model: "AMG GT"
	}, 
    {
		make: "BMW",
        model: "i7"
	}
];

console.log(cars.length);



for(let i=0; i<cars.length; i++)
{
    console.log(cars[i].make);
    console.log(cars[i].model);
}
