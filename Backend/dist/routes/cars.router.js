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
exports.uploadOnCloudinary = exports.carsRouter = void 0;
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const fs = __importStar(require("fs"));
exports.carsRouter = express.Router();
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: 'dxugybfqn',
    api_key: '433682319898571',
    api_secret: 'wSCEHETlGre52RCI-JHgCA03SQY',
});
const uploadOnCloudinary = (filePathOrUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log({ filePathOrUrl });
        if (!filePathOrUrl)
            return null;
        const isUrl = filePathOrUrl.startsWith('http://') || filePathOrUrl.startsWith('https://');
        let response;
        if (isUrl) {
            response = yield cloudinary_1.v2.uploader.upload(filePathOrUrl, {
                resource_type: "image",
            });
        }
        else {
            response = yield cloudinary_1.v2.uploader.upload(filePathOrUrl, {
                resource_type: "auto",
            });
            fs.unlinkSync(filePathOrUrl);
        }
        console.log("file is uploaded on Cloudinary ", response.url);
        return response;
    }
    catch (error) {
        console.error(`Error uploading to Cloudinary: ${error}`);
        return null;
    }
});
exports.uploadOnCloudinary = uploadOnCloudinary;
exports.carsRouter.use(express.json());
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _a === void 0 ? void 0 : _a.createIndex({ brand: 1 }));
    yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _b === void 0 ? void 0 : _b.createIndex({ category: 1 }));
    yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _c === void 0 ? void 0 : _c.createIndex({ _id: 1 }));
}))();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'image') {
            cb(null, true);
        }
        else {
            cb(new Error('Unexpected field'));
        }
    }
});
exports.carsRouter.post('/createNewCar', upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    try {
        const carData = req.body;
        const carImagePath = ((_d = req.file) === null || _d === void 0 ? void 0 : _d.path) || req.body.image;
        console.log({ carImagePath });
        if (!carImagePath) {
            return res.status(400).send({ status: 400, message: 'Image file is required.' });
        }
        const cloudinaryResponse = yield (0, exports.uploadOnCloudinary)(carImagePath);
        carData.externalImage = [cloudinaryResponse.url];
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _e === void 0 ? void 0 : _e.insertOne(carData));
        const Responsedata = yield ((_f = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _f === void 0 ? void 0 : _f.findOne({ _id: result.insertedId }));
        if (result) {
            return res.status(201).send({ status: 201, message: 'createNewCar successfully.', data: Responsedata });
        }
        else {
            throw new Error('Failed to add car data.');
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.carsRouter.get('/getAllCars', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g;
    try {
        const pageSize = 60;
        const pageNumber = parseInt(req.query.pageNumber, 10) || 1;
        const skip = (pageNumber - 1) * pageSize;
        const brand = req.query.brand;
        const category = req.query.category;
        const query = {};
        if (brand) {
            query.brand = brand;
        }
        if (category) {
            query.category = category;
        }
        console.log("pageNumber:", pageNumber);
        console.log("brand:", brand);
        console.log("category:", category);
        const timeoutMs = 500000;
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('MongoDB query timed out.'));
            }, timeoutMs);
        });
        const resultPromise = (_g = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _g === void 0 ? void 0 : _g.find(query).skip(skip).limit(pageSize).toArray();
        const result = yield Promise.race([timeoutPromise, resultPromise]);
        if (result) {
            return res.status(200).send({ data: result, message: "get all cars" });
        }
        else {
            return res.status(500).send({ status: 500, message: 'Failed to fetch car data.' });
        }
    }
    catch (error) {
        console.error(error);
        console.error("Database error:", error);
        return res.status(400).send(error.message);
    }
}));
exports.carsRouter.patch('/updateCar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    try {
        const carData = req.body;
        console.log(req.params.id);
        if (!mongodb_1.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ status: 400, message: 'Invalid ID format.' });
        }
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(`ID from request: ${req.params.id}`);
        const result = yield ((_h = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _h === void 0 ? void 0 : _h.updateOne({ _id: objectId }, { $set: carData }));
        if ((result === null || result === void 0 ? void 0 : result.modifiedCount) > 0) {
            return res.status(200).send({ status: 200, message: `Car updated successfully with id ${req.params.id}` });
        }
        else {
            return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
        }
    }
    catch (error) {
        if (error instanceof Error && error.name === 'CastError') {
            return res.status(400).send({ status: 400, message: 'Invalid ID format.' });
        }
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carsRouter.patch('/updateCarImage/:id', upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    try {
        const carData = req.body;
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const carImagePath = (_j = req.file) === null || _j === void 0 ? void 0 : _j.path;
        if (carImagePath) {
            const cloudinaryResponse = yield (0, exports.uploadOnCloudinary)(carImagePath);
            carData.externalImage = [cloudinaryResponse.url];
        }
        const result = yield ((_k = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _k === void 0 ? void 0 : _k.updateOne({ _id: objectId }, { $set: carData }));
        if ((result === null || result === void 0 ? void 0 : result.modifiedCount) > 0) {
            return res.status(200).send({ status: 200, message: `Car updated successfully with id ${req.params.id}` });
        }
        else {
            return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carsRouter.get('/getCar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _l;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_l = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _l === void 0 ? void 0 : _l.findOne({ _id: objectId }));
        if (result) {
            return res.status(201).send({ status: 201, message: "getCar sucessfully", data: result });
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
exports.carsRouter.delete('/deleteCar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _m;
    try {
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const result = yield ((_m = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _m === void 0 ? void 0 : _m.deleteOne({ _id: objectId }));
        if ((result === null || result === void 0 ? void 0 : result.deletedCount) > 0) {
            return res.status(201).send({ status: 201, message: `Car deleted successfully with id ${req.params.id}` });
        }
        else {
            return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.carsRouter.get("/dashBoard", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _o, _p, _q, _r, _s, _t;
    const cars = yield ((_o = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carData) === null || _o === void 0 ? void 0 : _o.countDocuments());
    const Categoryes = yield ((_p = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carCategory) === null || _p === void 0 ? void 0 : _p.countDocuments());
    const brands = yield ((_q = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carBrands) === null || _q === void 0 ? void 0 : _q.countDocuments());
    const enquiryes = yield ((_r = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _r === void 0 ? void 0 : _r.countDocuments());
    const contactInquires = yield ((_s = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _s === void 0 ? void 0 : _s.countDocuments());
    const location = yield ((_t = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.addCarLoaction) === null || _t === void 0 ? void 0 : _t.countDocuments());
    const result = {
        totalCars: cars,
        totalCategoryes: Categoryes,
        totalBrands: brands,
        totalEnquiryes: enquiryes,
        totalContactInquires: contactInquires,
        totalLocation: location
    };
    if (result) {
        return res.status(200).send({ status: 200, message: "getdashBoard sucessfully", data: result });
    }
    else {
        return res.status(400).send({ status: 400, message: " getdashBoard data is not avaible", data: {} });
    }
}));
exports.default = exports.carsRouter;
//# sourceMappingURL=cars.router.js.map