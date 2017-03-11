// modify your vehicle class to take advantage of prototypes!
// To recap, here is what we did in Part 1 and 2:
// create a VehicleConstructor that takes in the name, number of wheels, and number of passengers

// Each vehicle should have a makeNoise methodUsing the constructor, 
// create a Bikeredefine the Bike’s makeNoise method to print “ring ring!” 
// Using the constructor, create a Sedanredefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a BusGive the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count

// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, numberPassengers, speed){

	this.name = name;
	this.wheels = wheels;
	this.numberPassengers = numberPassengers;
	this.speed = speed;
	this.distance_travelled = 0;
	
	// VehicleConstructor.prototypes.introduce = function(){
	// 	console.log('I am a ', this.name);
	// };

	VehicleConstructor.prototype.makeNoise = function(noise){
		console.log("ring ring");
		return this;
	};

	VehicleConstructor.prototype.move = function(){
		this.updateDistanceTravelled();
		this.makeNoise();
		return this;
	};

	VehicleConstructor.prototype.checkMiles = function(){
		console.log('Distance travelled is = ', this.distance_travelled);
		return this;
	};

	VehicleConstructor.prototype.generateVIN = function(){
		this.VIN = Math.floor(Math.random()* Math.pow(10,10)+1);
		console.log('VIN = ',this.VIN);
		return this;
	}
	VehicleConstructor.prototype.updateDistanceTravelled = function(){
		this.distance_travelled += this.speed;
		return this;
	};

}


// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.

// You may have to change some private variables/methods to attributes to make all of the functionality work

// Then make the following additions:

// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

var unicyle = new VehicleConstructor('unique', 1, 1, 5);
console.log(unicyle.name);
console.log(unicyle.wheels);
console.log(unicyle.numberPassengers);

unicyle.makeNoise = function(){
	console.log("honk honk");
}


unicyle.makeNoise();
unicyle.move();
unicyle.checkMiles();
console.log(unicyle.speed);
unicyle.generateVIN();


