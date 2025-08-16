"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const excelService_1 = require("../utils/excelService");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const filePath = './bookings.xlsx';
if (!(0, fs_1.existsSync)(filePath)) {
    (0, fs_1.writeFileSync)(filePath, '');
}
const excelService = new excelService_1.ExcelService(filePath);
excelService.init().then(() => {
    app.post('/bookings', (req, res) => {
        const newBooking = req.body;
        excelService.addBooking(newBooking)
            .then(() => res.status(201).send('Booking added to Excel sheet'))
            .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    });
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
//# sourceMappingURL=excel.router.js.map