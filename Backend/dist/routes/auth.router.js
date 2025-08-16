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
exports.authRouter = void 0;
const express = __importStar(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const auth_1 = require("../models/auth");
const bcrypt = __importStar(require("bcrypt"));
const nodemailer = __importStar(require("nodemailer"));
const date_fns_1 = require("date-fns");
const jwt = __importStar(require("jsonwebtoken"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const crypto = require('crypto');
const configurePassport = () => {
    const jwtOptions = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET || 'your-secret-key',
    };
    passport_1.default.use(new passport_jwt_1.Strategy(jwtOptions, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const user = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ _id: new mongodb_1.ObjectId(payload.sub) }));
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        }
        catch (error) {
            return done(error, false);
        }
    })));
};
configurePassport();
const sendEmail = (to, subject, text, html) => __awaiter(void 0, void 0, void 0, function* () {
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
        to,
        subject,
        text,
        html,
    };
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            }
            else {
                console.log('Email sent:', info.response);
            }
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.authRouter = express.Router();
exports.authRouter.use(passport_1.default.initialize());
exports.authRouter.use(express.json());
exports.authRouter.get('/protectedRoute', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'This route is protected with JWT authentication.' });
});
exports.authRouter.post("/signUp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { firstName, lastName, email, password, phoneNumber, address, city, locality, area, zipcode } = req.body;
        const date = new Date();
        const formattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
        const existingUser = yield ((_a = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ email }));
        if (existingUser) {
            return res.status(409).send({ status: 409, message: "Email already exists. Please choose a different email." });
        }
        const newUser = new auth_1.Auth(firstName, lastName, email, password, phoneNumber, address, city, locality, area, zipcode);
        const result = yield ((_b = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _b === void 0 ? void 0 : _b.insertOne(newUser));
        if (result) {
            const mailOptions = {
                from: 'info@injazrent.ae',
                to: 'info@injazrent.ae',
                subject: 'New Customer Information',
                html: `
        <html>
        <body>
          <h2>New Customer Information:</h2>
          <table>
            <tr>
              <td><strong>First Name:</strong></td>
              <td>${firstName}</td>
            </tr>
            <tr>
              <td><strong>Last Name:</strong></td>
              <td>${lastName}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong></td>
              <td>${phoneNumber}</td>
            </tr>
            <tr>
              <td><strong>Address:</strong></td>
              <td>${address}</td>
            </tr>
            <tr>
              <td><strong>City:</strong></td>
              <td>${city}</td>
            </tr>
            <tr>
              <td><strong>Locality:</strong></td>
              <td>${locality}</td>
            </tr>
            <tr>
              <td><strong>Area:</strong></td>
              <td>${area}</td>
            </tr>
            <tr>
              <td><strong>Zipcode:</strong></td>
              <td>${zipcode}</td>
            </tr>
          </table>
        </body>
      </html>
        `,
            };
            yield sendEmail('info@injazrent.ae', 'New Customer Information', '', mailOptions.html);
            return res.status(201).send({ status: 201, message: `Successfully created a new User with id ${result.insertedId}` });
        }
        else {
            return res.status(500).send({ status: 500, message: "Failed to create a new User." });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}));
exports.authRouter.get("/getAllContactEnquiries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const result = yield ((_c = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _c === void 0 ? void 0 : _c.find().toArray());
        if (result) {
            return res.status(201).send({ status: 201, message: "getAllContactEnquiries", data: result || {} });
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
exports.authRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const { email, password } = req.body;
        console.log({ email });
        const user = yield ((_d = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _d === void 0 ? void 0 : _d.findOne({ email }));
        console.log({ user });
        if (!user) {
            return res.status(404).send({ status: 404, message: 'User not found. Please check your email or sign up.' });
        }
        const passwordMatch = yield bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ status: 401, message: 'Invalid password. Please check your password and try again.' });
        }
        const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
        console.log('Your JWT token is here:', token);
        return res.status(200).send({ status: 200, message: 'Login successful!', token });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
}));
exports.authRouter.put("/resetPassword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    try {
        const { email, password, newPassword } = req.body;
        const user = yield ((_e = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _e === void 0 ? void 0 : _e.findOne({ email }));
        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found. Please check your email or sign up." });
        }
        const passwordMatch = yield bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ status: 401, message: "Invalid password. Please check your password and try again." });
        }
        else {
            const data = new auth_1.Auth("test", "test", "info@injazrent.ae", "qwert12345", "9347323770", "test", "test", "test", "test", "test");
            const hashPass = data.hashPassword(newPassword);
            const result = yield ((_f = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _f === void 0 ? void 0 : _f.updateOne({ email: email }, { $set: { password: hashPass } }));
            return res.status(200).send({ status: 200, message: "Password reset successful!" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
exports.authRouter.put('/forgotPassword', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const { email } = req.body;
    const user = yield ((_g = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _g === void 0 ? void 0 : _g.findOne({ email }));
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    const tokens = crypto.randomBytes(32).toString('hex');
    const result = yield ((_h = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.token) === null || _h === void 0 ? void 0 : _h.insertOne({ email: email, token: tokens }));
    const resetPasswordLink = `https://your-app.com/reset-password/${tokens}`;
    if (result) {
        const mailOptions = {
            from: 'info@injazrent.ae',
            to: `${email}`,
            subject: 'Password Reset Request',
            text: `Click the following link to reset your password: ${resetPasswordLink}`,
        };
        yield sendEmail(`${email}`, 'Password Reset Request', mailOptions.text, '');
        return res.status(201).send({ status: 201, message: `Sent email to forgot password. Please reset through the link.` });
    }
}));
exports.authRouter.put('/changePassword', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k, _l, _m;
    try {
        const { email, newPassword, token } = req.body;
        const user = yield ((_j = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _j === void 0 ? void 0 : _j.findOne({ email }));
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const result = yield ((_k = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.token) === null || _k === void 0 ? void 0 : _k.findOne({ email: email, token: token }));
        if (!result) {
            return res.status(201).send({ status: 201, message: `Not authorized` });
        }
        const data = new auth_1.Auth("test", "test", "info@injazrent.ae", "qwert12345", "9347323770", "test", "test", "test", "test", "test");
        const hashPass = data.hashPassword(newPassword);
        const result1 = yield ((_l = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.users) === null || _l === void 0 ? void 0 : _l.updateOne({ email: email }, { $set: { password: hashPass } }));
        if (result1) {
            const removeToken = yield ((_m = database_service_1.collections === null || database_service_1.collections === void 0 ? void 0 : database_service_1.collections.token) === null || _m === void 0 ? void 0 : _m.deleteOne({ email: email }));
            return res.status(200).send({ status: 200, message: "Password reset successful!" });
        }
    }
    catch (err) {
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}));
//# sourceMappingURL=auth.router.js.map