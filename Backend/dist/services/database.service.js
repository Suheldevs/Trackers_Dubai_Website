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
exports.connectToDatabase = exports.collections = void 0;
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
exports.collections = {};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv.config();
        const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        yield client.connect();
        const db = client.db(process.env.DB_NAME);
        const users = db.collection(process.env.USERS);
        const token = db.collection(process.env.TOKEN);
        const carImages = db.collection(process.env.CAR_IMAGES);
        const driverCollections = db.collection(process.env.DRIVER_COLLECTION_NAME);
        const newLists = db.collection(process.env.NEW_LIST);
        const carsInquiry = db.collection(process.env.CAR_INQUIRY);
        const carCategory = db.collection(process.env.CAR_CATEGORYES);
        const carBrand = db.collection(process.env.CAR_BRNDS);
        const carData = db.collection(process.env.CAR_DATA);
        const carModel = db.collection(process.env.CAR_MODEL);
        const carFeatures = db.collection(process.env.CAR_FEATURES);
        const addCarServices = db.collection(process.env.CAR_SERVICES);
        const addCarEngineCapacities = db.collection(process.env.CAR_ENGINE);
        const addCarDocument = db.collection(process.env.CAR_DOCUMENT);
        const addCarLoaction = db.collection(process.env.CAR_LOCATION);
        const addFAQS = db.collection(process.env.CAR_FAQS);
        const contactInfo = db.collection(process.env.CONTACT_INFO);
        const tradeLicence = db.collection(process.env.TRADE_LICENCE);
        const corporateVedio = db.collection(process.env.CORPORATE_VIDEO);
        const addCharges = db.collection(process.env.ADD_CHARGES);
        const addDeliveryOptions = db.collection(process.env.ADD_DELIVERY_OPTIONS);
        const settings = db.collection(process.env.SETTINGS);
        const banners = db.collection(process.env.BANNERS);
        const CarModelNew = db.collection(process.env.CARMODELNEW);
        exports.collections.users = users;
        exports.collections.driver = driverCollections;
        exports.collections.carInquiry = carsInquiry;
        exports.collections.carCategory = carCategory;
        exports.collections.carBrands = carBrand;
        exports.collections.carData = carData;
        exports.collections.carModel = carModel;
        exports.collections.carFeatures = carFeatures;
        exports.collections.addCarServices = addCarServices;
        exports.collections.addCarEngineCapacities = addCarEngineCapacities;
        exports.collections.addCarDocument = addCarDocument;
        exports.collections.addCarLoaction = addCarLoaction;
        exports.collections.addFAQS = addFAQS;
        exports.collections.newList = newLists;
        exports.collections.contactInfo = contactInfo;
        exports.collections.tradeLicence = tradeLicence;
        exports.collections.corporateVedio = corporateVedio;
        exports.collections.addCharges = addCharges;
        exports.collections.addDeliveryOptions = addDeliveryOptions;
        exports.collections.carImages = carImages;
        exports.collections.token = token;
        exports.collections.settings = settings;
        exports.collections.banners = banners;
        exports.collections.CarModelNew = CarModelNew;
    });
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=database.service.js.map