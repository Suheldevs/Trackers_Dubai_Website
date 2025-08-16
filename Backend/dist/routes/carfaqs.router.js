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
exports.carfaqsRouter = void 0;
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const date_fns_1 = require("date-fns");
exports.carfaqsRouter = express.Router();
exports.carfaqsRouter.use(express.json());
exports.carfaqsRouter.post('/createFAQS', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = req.body;
        if (!data.Question || !data.Answer || !data.CreatedDate || !data.UpdatedDate || !data.Status) {
            return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
        }
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        data.CreatedDate = formattedDate;
        data.UpdatedDate = formattedDate;
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addFAQS) === null || _a === void 0 ? void 0 : _a.insertOne(data));
        if (result) {
            return res.status(201).send({ status: 201, message: 'createFAQS added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to add createFAQS.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.carfaqsRouter.get("/getAllFAQS", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addFAQS) === null || _b === void 0 ? void 0 : _b.find({}).toArray());
    if (result) {
        return res.status(200).send({ status: 200, message: "getAllFAQS sucessfully", data: result });
    }
    else {
        return res.status(400).send({ status: 400, message: "No data Found", data: {} });
    }
}));
exports.carfaqsRouter.get("/getFAQ/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addFAQS) === null || _c === void 0 ? void 0 : _c.findOne({ _id: objectId }));
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
exports.carfaqsRouter.delete("/deleteFAQ/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addFAQS) === null || _d === void 0 ? void 0 : _d.deleteOne({ _id: objectId }));
        return res.status(201).send({ status: 201, message: `Delete FAq is done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carfaqsRouter.put("/updateFAQ", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const { Question, Answer, Status, CreatedDate, UpdatedDate, _id } = req.body;
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(_id);
        console.log(objectId);
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addFAQS) === null || _e === void 0 ? void 0 : _e.updateOne({ _id: objectId }, { $set: { Question: Question, Answer: Answer, Status: Status, CreatedDate: CreatedDate, UpdatedDate: formattedDate } }));
        return res.status(201).send({ status: 201, message: `Update location done with ${req.params.id}` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
//# sourceMappingURL=carfaqs.router.js.map