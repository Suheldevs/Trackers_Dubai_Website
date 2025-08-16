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
exports.carInquiryRouter = void 0;
const bcrypt = __importStar(require("bcrypt"));
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const nodemailer = __importStar(require("nodemailer"));
const carInquiry_1 = require("../models/carInquiry");
const database_service_1 = require("../services/database.service");
const whatsapp_1 = require("../services/whatsapp");
exports.carInquiryRouter = express.Router();
exports.carInquiryRouter.use(express.json());
exports.carInquiryRouter.get('/getAllcontactenquiries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(req.params.id);
        const result = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _a === void 0 ? void 0 : _a.find().toArray());
        if (result) {
            return res.status(201).send({
                status: 201,
                message: 'getAllcontactenquiries',
                data: result || {},
            });
        }
        else {
            return res
                .status(400)
                .send({ status: 201, message: 'No data found', data: result });
        }
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal server Error' });
    }
}));
exports.carInquiryRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { email, password } = req.body;
        const user = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _b === void 0 ? void 0 : _b.findOne({ email }));
        console.log(user);
        if (!user) {
            return res.status(404).send({
                status: 404,
                message: 'User not found. Please check your email or sign up.',
            });
        }
        const passwordMatch = yield bcrypt.compareSync(password, user.password);
        console.log(passwordMatch, 'passwordMatchpasswordMatch');
        if (!passwordMatch) {
            return res.status(401).send({
                status: 401,
                message: 'Invalid password. Please check your password and try again.',
            });
        }
        return res.status(200).send({ status: 200, message: 'Login successful!' });
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal Server Error' });
    }
}));
function generateBookingId() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const counter = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _a === void 0 ? void 0 : _a.findOneAndUpdate({}, { $inc: { lastBookingId: 1 } }));
            if (counter.value) {
                const newBookingId = 'INJ' + counter.value.lastBookingId.toString().padStart(6, '0');
                return newBookingId;
            }
            else {
                yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _b === void 0 ? void 0 : _b.insertOne({ lastBookingId: 1 }));
                return 'INJ000001';
            }
        }
        catch (error) {
            console.error('Error generating booking ID:', error);
            return null;
        }
    });
}
exports.carInquiryRouter.post('/whatsappInquiry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { msg } = req.body;
        const transporterOptions = {
            host: 'smtp.hostinger.com',
            secure: false,
            secureConnection: false,
            tls: {
                ciphers: 'SSLv3',
            },
            port: 587,
            auth: {
                user: 'info@injazrent.ae',
                pass: 'Info@2016',
            },
        };
        const transporter = nodemailer.createTransport(transporterOptions);
        const mailOptions = {
            from: 'info@injazrent.ae',
            to: 'info@injazrent.ae',
            subject: 'INQUIRY Successfully CREATED',
            html: `
          <html>
            <body>
              <h2>Inquiry Details:</h2>
             <pre>${msg}</pre>
            </body>
          </html>
        `,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            }
            else {
                console.log('Email sent:', info.response);
                return res.status(201).send({
                    status: 201,
                    message: `Successfully created a inquiry  and sent email `,
                });
            }
        });
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal Server Error' });
    }
}));
exports.carInquiryRouter.post('/createInquiry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    try {
        const { name, carName, startDate, endDate, pickUpLoc, dropLocation, phoneNumber, email, message, deliveryMode, packages, brand, model, pickupTime, dropTime, } = req.body;
        const status = 'New';
        const statusMessage = 'Received new inquiry';
        const statusChangedBy = 'admin';
        const bookingCreated = new Date();
        const bookingUpdated = new Date();
        const isNewCar = true;
        function formatBookingId(id) {
            return id.toString().padStart(6, '0');
        }
        const bookingIdfromdb = yield generateBookingId();
        if (!bookingIdfromdb) {
            return res
                .status(500)
                .send({ status: 500, message: 'Failed to generate booking ID.' });
        }
        const newBookingId = formatBookingId(bookingIdfromdb + 1);
        const inquiry = new carInquiry_1.CarInquiry(newBookingId, name, carName, startDate, isNewCar, endDate, pickUpLoc, dropLocation, phoneNumber, message, deliveryMode, email, packages, brand, model, status, pickupTime, dropTime, statusMessage, statusChangedBy, bookingCreated, bookingUpdated);
        inquiry['email'] = email;
        console.log('🚀 ~ carInquiryRouter.post ~ inquiry:', inquiry);
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _c === void 0 ? void 0 : _c.insertOne(inquiry));
        console.log('🚀 ~ carInquiryRouter.post ~ result:', result);
        if (result) {
            const transporterOptions = {
                host: 'smtp.hostinger.com',
                secure: false,
                secureConnection: false,
                tls: {
                    ciphers: 'SSLv3',
                },
                port: 587,
                auth: {
                    user: 'info@injazrent.ae',
                    pass: 'Info@2016',
                },
            };
            const transporter = nodemailer.createTransport(transporterOptions);
            const mailOptions = {
                from: 'info@injazrent.ae',
                to: 'info@injazrent.ae',
                subject: 'INQUIRY Successfully CREATED',
                html: `
            <html>
              <body>
                <h2>Inquiry Details:</h2>
                <table>
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td><strong>Car:</strong></td>
                    <td>${brand}, ${model}</td>
                  </tr>
                  <tr>
                    <td><strong>Start Date:</strong></td>
                    <td>${startDate}</td>
                  </tr>
                  <tr>
                    <td><strong>End Date:</strong></td>
                    <td>${endDate}</td>
                  </tr>
                  <tr>
                    <td><strong>Pickup Location:</strong></td>
                    <td>${pickUpLoc}</td>
                  </tr>
                  <tr>
                    <td><strong>Drop Location:</strong></td>
                    <td>${dropLocation}</td>
                  </tr>
                  <tr>
                  <td><strong>Drop Location:</strong></td>
                  <td>${pickupTime}</td>
                </tr>
                <tr>
                <td><strong>Drop Location:</strong></td>
                <td>${dropTime}</td>
              </tr>
                  <tr>
                    <td><strong>Phone Number:</strong></td>
                    <td>${phoneNumber}</td>
                  </tr>
                  <tr>
                    <td><strong>Message:</strong></td>
                    <td>${message}</td>
                  </tr>
                  <tr>
                  <td><strong>Booking Id number:</strong></td>
                  <td>${newBookingId}</td>
                </tr>
                
                </table>
              </body>
            </html>
          `,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                }
                else {
                    console.log('Email sent:', info.response);
                }
            });
            const ResponseData = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _d === void 0 ? void 0 : _d.findOne({
                _id: result.insertedId,
            }));
            (0, whatsapp_1.sendWhatsAppmessage)({
                message: `New Enquiry received :  \n ${JSON.stringify(ResponseData, null, 2)}`,
            });
            return res.status(201).send({
                status: 201,
                message: `Successfully created a inquiry  and sent email `,
                result: ResponseData || {},
            });
        }
        else {
            return res
                .status(500)
                .send({ status: 500, message: 'Failed to create a inquiry.' });
        }
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal Server Error' });
    }
}));
exports.carInquiryRouter.get('/getInquiry/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        console.log(req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        console.log(objectId);
        const result = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _e === void 0 ? void 0 : _e.findOne({ _id: objectId }));
        if (result) {
            return res.status(201).send({
                status: 201,
                message: 'data get scussfully',
                data: result || {},
            });
        }
        else {
            return res
                .status(400)
                .send({ status: 201, message: 'No data found', data: result });
        }
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal server Error' });
    }
}));
exports.carInquiryRouter.delete('/deleteInquiry/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    try {
        console.log('Request recieved here:---->', req.params.id);
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const result = yield ((_f = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _f === void 0 ? void 0 : _f.deleteOne({
            _id: objectId,
        }));
        console.log(result);
        return res.status(201).send({
            status: 201,
            data: result,
            message: `Delete Inquiry is done with ${req.params.id}`,
        });
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal Server Error' });
    }
}));
exports.carInquiryRouter.patch('/updateInquiry/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g;
    try {
        const { carName, startDate, endDate, isNewCar, pickUpLoc, dropLocation, phoneNumber, area, message, deliveryMode, name, email, packages, brand, model, status, statusMessage, statusChangedBy, } = req.body;
        const objectId = new mongodb_1.ObjectId(req.params.id);
        const updateFields = {
            carName,
            startDate,
            endDate,
            isNewCar,
            pickUpLoc,
            dropLocation,
            phoneNumber,
            area,
            message,
            deliveryMode,
            name,
            email,
            packages,
            brand,
            model,
            status,
            statusMessage,
            statusChangedBy,
        };
        const result = yield ((_g = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _g === void 0 ? void 0 : _g.findOneAndUpdate({ _id: objectId }, { $set: updateFields }));
        if (result && result.value) {
            return res.status(200).send({
                status: 200,
                message: 'Inquiry updated successfully',
                data: result.value,
            });
        }
        else {
            return res.status(404).send({
                status: 404,
                message: 'Inquiry not found',
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}));
exports.carInquiryRouter.get('/getInquirys', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    try {
        const result = yield ((_h = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.carInquiry) === null || _h === void 0 ? void 0 : _h.find().toArray());
        if (result) {
            return res.status(201).send({
                status: 201,
                message: 'getInquirys sucessfully',
                data: result,
            });
        }
        else {
            return res
                .status(400)
                .send({ status: 201, message: 'No data found', data: result });
        }
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ status: 500, message: 'Internal Server Error' });
    }
}));
//# sourceMappingURL=carInquirys.router.js.map