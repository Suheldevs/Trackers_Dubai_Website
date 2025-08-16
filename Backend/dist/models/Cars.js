"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModelNew = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    name: { type: String },
    brand: { type: String },
    location: { type: String },
    price: { type: String },
    images: [{ url: String, public_id: String }],
    specifications: [{ key: String, value: String }],
});
exports.CarModelNew = (0, mongoose_1.model)('Car', carSchema);
//# sourceMappingURL=Cars.js.map