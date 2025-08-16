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
exports.SettingsRouter = void 0;
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const date_fns_1 = require("date-fns");
exports.SettingsRouter = express.Router();
exports.SettingsRouter.use(express.json());
exports.SettingsRouter.post('/createsettings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { phoneNumber, email } = req.body;
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.settings) === null || _a === void 0 ? void 0 : _a.insertOne({ phoneNumber, email, createdDate: formattedDate, updatedDate: formattedDate }));
        if (result) {
            return res.status(201).send({ status: 201, result: result, message: 'Settings added successfully.' });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to add settings.' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.SettingsRouter.get('/getAllsettings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.settings) === null || _b === void 0 ? void 0 : _b.find({}).toArray());
        if (result) {
            return res.status(200).send({ status: 200, result: result, message: "All settings retrieved successfully", data: result });
        }
        else {
            return res.status(400).send({ status: 400, message: "No settings found", data: [] });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal server error" });
    }
}));
exports.SettingsRouter.get('/getSettings/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.settings) === null || _c === void 0 ? void 0 : _c.findOne({ _id: objectId }));
        if (result) {
            return res.status(200).send({ status: 200, result: result, message: "Settings retrieved successfully", data: result });
        }
        else {
            return res.status(400).send({ status: 400, message: "Settings not found" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal server error" });
    }
}));
exports.SettingsRouter.put('/updateSettings/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const { phoneNumber, email } = req.body;
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const result = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.settings) === null || _d === void 0 ? void 0 : _d.updateOne({ _id: objectId }, { $set: { phoneNumber, email, updatedDate: formattedDate } }));
        if (result.modifiedCount !== 0) {
            return res.status(200).send({ status: 200, result: result, message: `Settings updated successfully for id ${req.params.id}` });
        }
        else {
            return res.status(400).send({ status: 400, message: "Settings not found or no changes made" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal server error" });
    }
}));
exports.SettingsRouter.delete('/deleteSettings/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.settings) === null || _e === void 0 ? void 0 : _e.deleteOne({ _id: objectId }));
        if (result.deletedCount !== 0) {
            return res.status(200).send({ status: 200, result: result, message: `Settings deleted successfully for id ${req.params.id}` });
        }
        else {
            return res.status(400).send({ status: 400, message: "Settings not found" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal server error" });
    }
}));
//# sourceMappingURL=setting.route.js.map