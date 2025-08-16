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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const cars_router_1 = require("./routes/cars.router");
const driver_routes_1 = require("./routes/driver.routes");
const carImages_route_1 = require("./routes/carImages.route");
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = require("./routes/auth.router");
const carBrands_router_1 = require("./routes/carBrands.router");
const carcapacities_router_1 = require("./routes/carcapacities.router");
const cardocuments_router_1 = require("./routes/cardocuments.router");
const carfaqs_router_1 = require("./routes/carfaqs.router");
const carFeatures_router_1 = require("./routes/carFeatures.router");
const carInquirys_router_1 = require("./routes/carInquirys.router");
const carlocation_router_1 = require("./routes/carlocation.router");
const carModels_router_1 = require("./routes/carModels.router");
const carservices_1 = require("./routes/carservices");
const categoryes_router_1 = require("./routes/categoryes.router");
const setting_route_1 = require("./routes/setting.route");
const banner_1 = require("./routes/banner");
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const dotenv = __importStar(require("dotenv"));
const log4js = __importStar(require("log4js"));
const bodyParser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
dotenv.config();
const port = normalizePort(process.env.PORT || '4000');
const app = (0, express_1.default)();
log4js.configure({
    appenders: { serviceprAdmin: { type: 'file', filename: 'servicepr-admin.log' } },
    categories: { default: { appenders: ['serviceprAdmin'], level: 'info' } },
});
const logger = log4js.getLogger('serviceprAdmin');
const corsOptions = {
    origin: ['*', 'https://injazrent.ae', 'http://localhost:3000', 'http://localhost:3001', 'localhost:3000', 'https://wwww.injazrent.ae', 'https://dev.injazrent.ae', 'https://www.dev.injazrent.ae', "https://tracker.ae", "http://localhost:5173/"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use('/user', cars_router_1.carsRouter, carBrands_router_1.carBrandsRouter, auth_router_1.authRouter, carcapacities_router_1.carcapacitiesRouter, cardocuments_router_1.cardocumentsRouter, carfaqs_router_1.carfaqsRouter, carFeatures_router_1.carFeaturesRouter, carImages_route_1.carsImagesRouter, carInquirys_router_1.carInquiryRouter, carlocation_router_1.carLocationRouter, carModels_router_1.carModelRouter, carservices_1.carServiceRouter, categoryes_router_1.CategoryesRouter, driver_routes_1.driverRouters);
    app.use('/driver', driver_routes_1.driverRouters);
    app.use('/admin', setting_route_1.SettingsRouter, banner_1.bannersRouter);
    app.use('/testing', carRoutes_1.default);
    app.listen(port, () => {
        logger.info(`Server started at http://localhost:${port}`);
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    logger.error('Database connection failed ', error);
    process.exit();
});
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
app.get('/', (req, res) => {
    res.send('API is running...');
});
//# sourceMappingURL=server.js.map