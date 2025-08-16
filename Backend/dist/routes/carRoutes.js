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
const database_service_1 = require("./../services/database.service");
const express_1 = __importDefault(require("express"));
const Cars_1 = require("../models/Cars");
const multer_1 = __importDefault(require("../middlewares/multer"));
const router = express_1.default.Router();
router.post('/', multer_1.default.array('images'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = [];
        console.log('files--->', req.files);
        if (Array.isArray(req.files)) {
            images.push(...req.files.map((file) => ({ url: `./uploads/${file.name}` })));
        }
        const newCar = {
            name: req.body.name,
            brand: req.body.brand,
            location: req.body.location,
            price: req.body.price,
            images,
            specifications: req.body.specifications ? JSON.parse(req.body.specifications) : [],
        };
        const car = yield database_service_1.collections.CarModelNew.insertOne(newCar);
        console.log({ newCar });
        res.status(201).json(car);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating car' });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cars = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.CarModelNew) === null || _a === void 0 ? void 0 : _a.find({}).toArray());
        res.json(cars);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching cars' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const car = yield database_service_1.collections.CarModelNew.findOne({ _id: id });
        if (!car) {
            return res.status(404).json({ message: 'THe Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching car' });
    }
}));
router.put('/:id', multer_1.default.array('images'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updates = req.body;
        if (Array.isArray(req.files)) {
            const images = [];
            images.push(...req.files.map((file) => ({ url: `uploads/${file.name}`, public_id: file.name })));
        }
        const car = yield Cars_1.CarModelNew.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating car' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield Cars_1.CarModelNew.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting car' });
    }
}));
router.get('/images/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const cars = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.CarModelNew) === null || _b === void 0 ? void 0 : _b.find({}).toArray());
        const carsWithImages = cars.map(car => {
            const imageUrls = car.images.map(filename => `/uploads/${filename}`);
            return Object.assign(Object.assign({}, car), { images: imageUrls });
        });
        res.json(carsWithImages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching cars' });
    }
}));
exports.default = router;
//# sourceMappingURL=carRoutes.js.map