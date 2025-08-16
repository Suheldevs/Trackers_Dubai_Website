export declare class Auth {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    city: string;
    locality: string;
    area: string;
    zipcode: string;
    constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: string, address: string, city: string, locality: string, area: string, zipcode: string);
    private isValidString;
    private isValidPhoneNumber;
    private isValidEmail;
    private isValidPassword;
    hashPassword(password: string): string;
    returnData(): {
        firstName: string;
        lastName: string;
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
export interface resetPassowrd {
    email: string;
    password: string;
    newPassword: string;
}
export interface forgotPassoword {
    email: string;
    token: string;
    newPassword: string;
}
