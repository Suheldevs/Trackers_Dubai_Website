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
exports.carModelRouter = void 0;
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const date_fns_1 = require("date-fns");
exports.carModelRouter = express.Router();
exports.carModelRouter.use(express.json());
exports.carModelRouter.post('/addCarModel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const carData = req.body;
        if (!carData.Name || !carData.Brand || !carData.CreatedDate || !carData.UpdatedDate) {
            return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
        }
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        carData.CreatedDate = formattedDate;
        carData.UpdatedDate = formattedDate;
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carModel) === null || _a === void 0 ? void 0 : _a.insertOne(carData));
        if (result) {
            return res.status(201).send({ status: 201, message: 'Car Model added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to add car data.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.carModelRouter.get('/getCarModel/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carModel) === null || _b === void 0 ? void 0 : _b.findOne({ _id: objectId }));
        if (result) {
            return res.status(201).send({ status: 201, message: "getCarModel sucessfully", data: result });
        }
        else {
            return res.status(400).send({ status: 201, message: "No data found", data: result });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal server Error" });
    }
}));
exports.carModelRouter.put('/updateCarModel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const { Name, Brand, CreatedDate, UpdatedDate, _id } = req.body;
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(_id);
        console.log(objectId);
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carModel) === null || _c === void 0 ? void 0 : _c.updateOne({ _id: objectId }, { $set: { Name: Name, Brand: Brand, CreatedDate: CreatedDate, UpdatedDate: formattedDate } }));
        return res.status(201).send({ status: 201, message: `update carModel is done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carModelRouter.delete('/deleteCarModel/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carModel) === null || _d === void 0 ? void 0 : _d.deleteOne({ _id: objectId }));
        return res.status(201).send({ status: 201, message: `Delete carModel is done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carModelRouter.get("/getAllCarModel", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const test = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carModel) === null || _e === void 0 ? void 0 : _e.find({}).toArray());
        if (test) {
            return res.status(201).send({ status: 201, message: "getAllCarModel sucessfully", data: test });
        }
        else {
            res.status(400).send({ status: 400, message: 'No data found.', data: {} });
        }
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
}));
//# sourceMappingURL=carModels.router.js.map