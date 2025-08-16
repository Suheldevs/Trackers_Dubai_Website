"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Auth {
    constructor(userName, email, password, phoneNumber, address, city, locality, area, zipcode) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.locality = locality;
        this.area = area;
        this.zipcode = zipcode;
        if (!this.isValidString(userName)) {
            throw Error(JSON.stringify({ message: "Invalid username. Username must be a non-empty string." }));
        }
        if (!this.isValidString(address)) {
            throw Error(JSON.stringify({ message: "Invalid address. address must be a non-empty string." }));
        }
        if (!this.isValidString(city)) {
            throw Error(JSON.stringify({ message: "Invalid city. city must be a non-empty string." }));
        }
        if (!this.isValidString(locality)) {
            throw Error(JSON.stringify({ message: "Invalid locality. locality must be a non-empty string." }));
        }
        if (!this.isValidString(area)) {
            throw Error(JSON.stringify({ message: "Invalid area.area must be a non-empty string." }));
        }
        if (!this.isValidString(zipcode)) {
            throw Error(JSON.stringify({ message: "Invalid zipcode.zipcode  must be a non-empty string." }));
        }
        if (!this.isValidPhoneNumber(phoneNumber)) {
            throw new Error(JSON.stringify({ message: "Invalid phone number. Please provide a valid phone number as a number type." }));
        }
        if (!this.isValidEmail(email)) {
            throw new Error(JSON.stringify({ message: "Invalid email address. Please provide a valid email address." }));
        }
        if (!this.isValidPassword(password)) {
            throw new Error(JSON.stringify({ message: "Invalid password. Password must be at least 6 characters long." }));
        }
        this.password = this.hashPassword(password);
        this.returnData();
    }
    isValidString(userName) {
        return typeof userName === 'string' && userName.trim().length > 0;
    }
    isValidPhoneNumber(phoneNumber) {
        return typeof phoneNumber === 'string';
    }
    isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        console.log(emailRegex.test(email), "emailRegex.test(email);emailRegex.test(email);");
        return emailRegex.test(email);
    }
    isValidPassword(password) {
        return password.length >= 6;
    }
    hashPassword(password) {
        const saltRounds = 10;
        const hashedPassword = bcrypt_1.default.hashSync(password, saltRounds);
        return hashedPassword;
    }
    returnData() {
        return {
            userName: this.userName, email: this.email, password: this.password, phoneNumber: this.phoneNumber, address: this.address, city: this.city, locality: this.locality, area: this.area, zipcode: this.zipcode
        };
    }
}
exports.Auth = Auth;
//# sourceMappingURL=driver.js.map