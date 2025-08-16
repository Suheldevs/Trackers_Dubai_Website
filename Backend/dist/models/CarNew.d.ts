import { ObjectId } from "mongodb";
export interface CarBasicInfo {
    _id?: ObjectId;
    name: string;
    brand: string;
    model: string;
    year: number;
    categoryId: ObjectId;
    locationId: ObjectId;
    exteriorColor: string;
    interiorColor: string;
    imageUrls: string[];
}
export interface CarPricing {
    _id?: ObjectId;
    carId: ObjectId;
    dailyPrice: number;
    weeklyPrice: number;
    monthlyPrice: number;
}
export interface CarSpecifications {
    _id?: ObjectId;
    carId: ObjectId;
    transmission: string;
    cruiseControl: boolean;
    engineCapacity: string;
    luggageBootCapacity: string;
    engineSize: string;
    seater: string;
    bluetooth: boolean;
    aux: boolean;
    navigation: boolean;
    parkingSensor: boolean;
    appleCarPlay: boolean;
    isoFix: boolean;
    sunRoof: boolean;
    pushButton: boolean;
    lcd: boolean;
    rearCamera: boolean;
}
export interface CarAdditionalDetails {
    _id?: ObjectId;
    carId: ObjectId;
    securityDeposit: number;
    cashType: string[];
    carFeatures: string[];
    unlimitedMileage: boolean;
    paiInsurance: {
        daily: number;
        monthly: number;
    };
    freeCancellation: boolean;
    freeDelivery: {
        thirtyDaysAndAbove: boolean;
    };
    customerSupport: boolean;
    scdwPerMonth: number;
    paymentType: string;
    requirements: {
        forUAEResidents: string[];
        forTourists: string[];
    };
}
export interface Category {
    _id?: ObjectId;
    name: string;
}
export interface Location {
    _id?: ObjectId;
    name: string;
    address: string;
}
export interface User {
    _id?: ObjectId;
    name: string;
    email: string;
    password: string;
}
export interface BookingHistory {
    _id?: ObjectId;
    userId: ObjectId;
    carId: ObjectId;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
}
