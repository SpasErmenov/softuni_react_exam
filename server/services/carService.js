const Car = require('../models/Car');

exports.getAll = () => Car.find({}).lean();

exports.getOne = (carId) => Car.findById(carId).lean();

exports.buy = async (userId, carId) =>  {
    
    const car = await Car.findById(carId);
    //TODO: check if user already bought this car
    car.buyers.push(userId);
    
    return car.save();
    
   //car.findByIdAndUpdate(carId, {$push: { buyers: userId }});
}

exports.create = (ownerId, carData) => Car.create({...carData, owner: ownerId});

exports.edit = (carId, carData) => Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);

exports.search = async (name, paymentMethod) => {
    let car = await this.getAll();

    if (name) {
       car = car.filter(x => x.name.toLowerCase() == name) 
    }

    if (paymentMethod) {
        car = car.filter(x => x.paymentMethod == paymentMethod) 
    }

    return car;
};