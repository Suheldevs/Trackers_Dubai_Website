export declare class ExcelService {
    private workbook;
    private sheet;
    private filePath;
    constructor(filePath: string);
    init(): Promise<void>;
    addBooking(booking: Booking): Promise<void>;
}
export interface Booking {
    bookingID: number;
    userName: string;
    carModel: string;
    pickupDate: string;
    returnDate: string;
}
