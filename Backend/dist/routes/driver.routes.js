"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouters = void 0;
const express = __importStar(require("express"));
const database_service_1 = require("../services/database.service");
const bcrypt = __importStar(require("bcrypt"));
const driver_1 = require("../models/driver");
exports.driverRouters = express.Router();
exports.driverRouters.use(express.json());
exports.driverRouters.post("/signUp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { userName, email, password, phoneNumber, address, city, locality, area, zipcode } = req.body;
        const existingUser = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.driver) === null || _a === void 0 ? void 0 : _a.findOne({ email }));
        if (existingUser) {
            return res.status(409).send({ status: 409, message: "Email already exists. Please choose a different email." });
        }
        const newUser = new driver_1.Auth(userName, email, password, phoneNumber, address, city, locality, area, zipcode);
        const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.driver) === null || _b === void 0 ? void 0 : _b.insertOne(newUser));
        console.log(result);
        if (result) {
            return res.status(201).send({ status: 201, message: `Successfully created a new User with id ${result.insertedId}` });
        }
        else {
            return res.status(500).send({ status: 500, message: "Failed to create a new User." });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const { email, password } = req.body;
        const user = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.driver) === null || _c === void 0 ? void 0 : _c.findOne({ email }));
        console.log(user);
        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found. Please check your email or sign up." });
        }
        const passwordMatch = yield bcrypt.compareSync(password, user.password);
        console.log(passwordMatch, "passwordMatchpasswordMatch");
        if (!passwordMatch) {
            return res.status(401).send({ status: 401, message: "Invalid password. Please check your password and try again." });
        }
        return res.status(200).send({ status: 200, message: "Login successful!" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.driverRouters.post('/createNewlist', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const carData = req.body;
        const result = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.newList) === null || _d === void 0 ? void 0 : _d.insertOne(carData));
        if (result) {
            return res.status(201).send({ status: 201, message: 'createNewList successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to createNewList.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post('/addContactInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const carData = req.body;
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.contactInfo) === null || _e === void 0 ? void 0 : _e.insertOne(carData));
        if (result) {
            return res.status(201).send({ status: 201, message: 'contactInfo added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to addContactInfo' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post('/addtradeLicence', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    try {
        const tradedata = req.body;
        const result = yield ((_f = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.tradeLicence) === null || _f === void 0 ? void 0 : _f.insertOne(tradedata));
        if (result) {
            return res.status(201).send({ status: 201, message: 'tradeLicence added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to tradeLicence' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post('/addCorporateVedio', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g;
    try {
        const CorporateVediodata = req.body;
        const result = yield ((_g = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.corporateVedio) === null || _g === void 0 ? void 0 : _g.insertOne(CorporateVediodata));
        if (result) {
            return res.status(201).send({ status: 201, message: 'corporateVedio added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to corporateVedio' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post('/addCharges', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    try {
        const addCharges = req.body;
        const result = yield ((_h = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addCharges) === null || _h === void 0 ? void 0 : _h.insertOne(addCharges));
        if (result) {
            return res.status(201).send({ status: 201, message: 'addCharges successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to addCharges.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.driverRouters.post('/addDeliveryOptions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    try {
        const deliveryOptions = req.body;
        const result = yield ((_j = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addDeliveryOptions) === null || _j === void 0 ? void 0 : _j.insertOne(deliveryOptions));
        if (result) {
            return res.status(201).send({ status: 201, message: 'addDeliveryOptions successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to addDeliveryOptions.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.default = exports.driverRouters;
//# sourceMappingURL=driver.routes.js.map