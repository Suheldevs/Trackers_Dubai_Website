"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppmessage = void 0;
const twilio_1 = __importDefault(require("twilio"));
const accountSid = 'AC74e07a59879611d14837ec0b16c5a4ce';
const authToken = '05fa3d42cf11dbb516338f92c41a951f';
const client = (0, twilio_1.default)(accountSid, authToken);
const sendWhatsAppmessage = ({ message }) => {
    client.messages
        .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+918826882676',
    })
        .then((message) => console.log(message.sid));
};
exports.sendWhatsAppmessage = sendWhatsAppmessage;
//# sourceMappingURL=whatsapp.js.map