const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
    if(password !== repeatPassword) {
        throw new Error('Password missmatch');
    }
    //TODO: Check if user exists
    const existingUser = await this.findByUsername(username);
    if (existingUser) {
        throw new Error('User exists')
    }
    
    //TODO: validate password

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({username, email, password: hashedPassword});

    return this.login(email, password);
};

exports.login = async (email, password) => {
    //user exists
    const user = await this.findByEmail(email);
    //password is valid
    if (!user) {
        throw new Error('Invalid email or password')
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error('Invalid email or password')
    }
    // generate token
    const payload = {
        _id: user._id,
        email,
        username: user.user,
    };
    const token = await jwt.sign(payload, SECRET)

    return token;
};