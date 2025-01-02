class Car {
	// properties
	public model
	public color
	public engineType
	public make

    // methods
    accelerate() {}
    display() {}
}
  
  class CamryCar extends Car {
	constructor(value) {
		super();
		this.value = value
	}
    accelerate(number) {
    	this.value = number
    }
    display(){
    	console.log(`Acceleration: ${this.value}`)
    }

}

    let camry = new CamryCar()
    camry.accelerate(120)
    camry.display()

    class CorollaCar extends Car {
	constructor(value) {
		super();
		this.value = value
	}
    accelerate(number) {
    	this.value = number
    }
    display(){
    	console.log(`Acceleration: ${this.value}`)
    }

}

    let corolla = new CorollaCar()
    corolla.accelerate(140)
    corolla.display()

    class YarisCar extends Car {
	constructor(value) {
		super();
		this.value = value
	}
    accelerate(number) {
    	this.value = number
    }
    display(){
    	console.log(`Acceleration: ${this.value}`)
    }

}

    let yaris = new YarisCar()
    yaris.accelerate(160)
    yaris.display()