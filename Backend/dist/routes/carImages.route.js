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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsImagesRouter = void 0;
const carImages_1 = __importDefault(require("../models/carImages"));
const express = __importStar(require("express"));
const database_service_1 = require("../services/database.service");
exports.carsImagesRouter = express.Router();
exports.carsImagesRouter.use(express.json());
exports.carsImagesRouter.post("/addCarImage", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { carId, image, imageType } = req.body;
        const newBrand = new carImages_1.default(carId, image, imageType);
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carImages) === null || _a === void 0 ? void 0 : _a.insertOne(newBrand));
        if (result) {
            return res.status(200).send({ status: 200, message: `Successfully added carImage ${result.insertedId}` });
        }
        else {
            return res.status(500).send({ status: 500, message: "Failed to create a carImage" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.carsImagesRouter.get("/getCarImages/:imageType?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const imageType = req.params.imageType;
        let result;
        if (typeof imageType === 'undefined') {
            const queryResult = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carImages) === null || _b === void 0 ? void 0 : _b.find().toArray());
            result = queryResult || [];
        }
        else {
            const queryResult = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carImages) === null || _c === void 0 ? void 0 : _c.find({ imageType }).toArray());
            result = queryResult || [];
        }
        return res.status(200).send({ status: 200, message: "Successfully getCarImages", data: result });
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=carImages.route.js.map