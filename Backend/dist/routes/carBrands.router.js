"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carBrandsRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const categoryes_1 = require("../models/categoryes");
const date_fns_1 = require("date-fns");
exports.carBrandsRouter = express_1.default.Router();
exports.carBrandsRouter.use(express_1.default.json());
exports.carBrandsRouter.post("/createBrand", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { name, status, slag, createdDate, updatedDate } = req.body;
        const date = new Date();
        let formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        createdDate = formattedDate;
        updatedDate = formattedDate;
        const newBrand = new categoryes_1.Categoryes(name, status, slag, createdDate, updatedDate);
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _a === void 0 ? void 0 : _a.insertOne(newBrand));
        if (result) {
            return res.status(201).send({ status: 201, message: `Successfully created a new Brand with id ${result.insertedId}` });
        }
        else {
            return res.status(500).send({ status: 500, message: "Failed to create a new Brand." });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.carBrandsRouter.get("/getBrand/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _b === void 0 ? void 0 : _b.findOne({ _id: objectId }));
        if (result) {
            return res.status(201).send({ status: 201, message: "data get scussfully", data: result || {} });
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
exports.carBrandsRouter.delete("/deleteBrand/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _c === void 0 ? void 0 : _c.deleteOne({ _id: objectId }));
        return res.status(201).send({ status: 201, message: `Delete Brand is done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carBrandsRouter.put("/updateBrand", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const { name, status, slag, createdDate, updatedDate, _id } = req.body;
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(_id);
        console.log(objectId);
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const result = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _d === void 0 ? void 0 : _d.updateOne({ _id: objectId }, { $set: { name: name, status: status, slag: slag, createdDate: createdDate, updatedDate: formattedDate } }));
        return res.status(201).send({ status: 201, message: `Update Brand done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carBrandsRouter.get("/getAllBrands", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _e === void 0 ? void 0 : _e.find({}).toArray());
        if (result) {
            return res.status(201).send({ status: 201, message: "getAllBrands sucessfully", data: result });
        }
        else {
            return res.status(400).send({ status: 400, message: "No data found", data: {} });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=carBrands.router.js.map