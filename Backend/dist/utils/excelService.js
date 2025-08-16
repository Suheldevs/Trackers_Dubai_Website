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
exports.ExcelService = void 0;
const ExcelJS = __importStar(require("exceljs"));
const stream_1 = require("stream");
const fs = __importStar(require("fs"));
class ExcelService {
    constructor(filePath) {
        this.filePath = filePath;
        this.workbook = new ExcelJS.Workbook();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.workbook = new ExcelJS.Workbook();
                const fileExists = yield fs.promises.access(this.filePath)
                    .then(() => true)
                    .catch(() => false);
                if (fileExists) {
                    const stream = stream_1.Readable.from([Buffer.from('')]);
                    this.workbook = yield this.workbook.xlsx.read(stream);
                }
                else {
                    yield this.workbook.xlsx.writeBuffer();
                }
                this.sheet = this.workbook.getWorksheet('Bookings') || this.workbook.addWorksheet('Bookings');
                if (this.sheet.rowCount === 1) {
                    this.sheet.addRow(['BookingID', 'UserName', 'CarModel', 'PickupDate', 'ReturnDate']);
                }
            }
            catch (error) {
                console.error('Error initializing Excel service:', error);
            }
        });
    }
    addBooking(booking) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingID, userName, carModel, pickupDate, returnDate } = booking;
                this.sheet.addRow([bookingID, userName, carModel, pickupDate, returnDate]);
                yield this.workbook.xlsx.writeFile(this.filePath);
            }
            catch (error) {
                console.error('Error adding booking to Excel sheet:', error);
            }
        });
    }
}
exports.ExcelService = ExcelService;
//# sourceMappingURL=excelService.js.map