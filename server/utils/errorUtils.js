function getFirstMongooseError(error) {
    //const errors = Object.keys(error.errors).map(key => error.errors[key].message);
    const firstError = Object.values(error.errors)[0].message;

    //return errors[0];
    return firstError;
}

exports.getErrorMessage = (error) => {
    

    switch (error.name) {
        case 'Error':
            return error.message;
    
        case 'ValidationError':
            return getFirstMongooseError(error);
        default:
            return error.message;
    }
};