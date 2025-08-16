export declare class Auth {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    city: string;
    locality: string;
    area: string;
    zipcode: string;
    constructor(userName: string, email: string, password: string, phoneNumber: string, address: string, city: string, locality: string, area: string, zipcode: string);
    private isValidString;
    private isValidPhoneNumber;
    private isValidEmail;
    private isValidPassword;
    private hashPassword;
    returnData(): {
        userName: string;
        email: string;
        password: string;
        phoneNumber: string;
        address: string;
        city: string;
        locality: string;
        area: string;
        zipcode: string;
    };
}
export interface Newlist {
    selecrCar: {
        carBrand: string;
        version: string;
        makeYear: string;
    };
    carSpecs: {
        AvalibleColors: number[];
        carfeaturs: number[];
        specs: string;
        CruiseControl: boolean;
        FuelType: string;
        EngineCapacity: string;
        BootCapacity: string;
    };
    PRICING: {
        PricePerDay: string;
        MinimumDayBooking: string;
        PricePerWeek: string;
        ExtraMillingCost: string;
        CDW: string;
    };
    RentalTerms: {
        Security: string;
        ExcessClaim: string;
        Delivery: string;
        SpecialNote: string;
    };
    MonthlyPricing: {
        '1month': number[];
        '3months': number[];
        '6months': number[];
        '12months': number[];
        CDW: string;
    };
}
export interface ContactInfo {
    Emai: string;
    WhatsupNo: string;
    SMSNotificationNo: string;
    MainAdress: string;
    MainAdressArabic: string;
    PhoneNo: string;
}
export interface tradeLicence {
    UploadTradLicense: string;
    LicenseExpiryDate: string;
}
export interface corporateVedio {
    CORPORATE_VIDEO: string;
}
export interface addDeliveryOptions {
    DeliveryTerms: {
        DeliverywithinEmirate: string;
        DeliveryatAirport: string;
        DeliveryPickupCharges: string;
    };
    FastDelivery: {
        deliveryItem: string;
    };
}
export interface addCharges {
    DefaultCharges: {
        Spes: string;
        ExtaMillageCost: string;
        ExcessClaim: string;
        MilleagePerDay: string;
        MilleagePerMonth: string;
        MilleagePerWeek: string;
        SecurityDeposite: string;
        AcceptedIn: string;
        MinimumCustomers: string;
        RequiredDriving: string;
        SpecialNoteFor: string;
    };
    ExtraCharges: {
        GPSDevice: string;
        CDWPerDayCost: string;
        CDWPerMonthCost: string;
        Salik: string;
        AdditionalDriverInsurance: string;
        BabySeat: string;
    };
}
export interface addDeliveryOptions {
    DeliveryTerms: {
        DeliverywithinEmirate: string;
        DeliveryatAirport: string;
        DeliveryPickupCharges: string;
    };
    FastDelivery: {
        deliveryItem: string;
    };
}
