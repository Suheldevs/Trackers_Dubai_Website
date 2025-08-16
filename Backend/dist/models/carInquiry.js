"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarInquiry = void 0;
class CarInquiry {
    constructor(bookingId, name, carName, startDate, isNewCar, endDate, pickUpLoc, dropLocation, phoneNumber, message, deliveryMode, email, packages, brand, model, status, pickupTime, dropTime, statusMessage, statusChangedBy, bookingCreated, bookingUpdated) {
        return {
            bookingId: bookingId,
            carName: carName,
            startDate: startDate,
            endDate: endDate,
            pickUpLoc: pickUpLoc,
            dropLocation: dropLocation,
            isNewCar: isNewCar,
            phoneNumber: phoneNumber,
            message: message,
            deliveryMode: deliveryMode,
            name: name,
            email: email,
            packages: packages,
            brand: brand,
            model: model,
            status: status,
            pickupTime: pickupTime,
            dropTime: dropTime,
            statusMessage: statusMessage,
            statusChangedBy: statusChangedBy,
            bookingCreated: bookingCreated,
            bookingUpdated: bookingUpdated
        };
    }
}
exports.CarInquiry = CarInquiry;
//# sourceMappingURL=carInquiry.js.map