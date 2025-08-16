"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extname = path_1.default.extname(file.originalname);
        const filename = file.fieldname + '-' + uniqueSuffix + extname;
        cb(null, filename);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Image uploaded is not of type jpg/jpeg or png'), false);
    }
};
const upload = (0, multer_1.default)({ storage: storage, fileFilter: fileFilter });
exports.default = upload;
//# sourceMappingURL=multer.js.map