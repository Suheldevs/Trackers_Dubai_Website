export declare class Categoryes {
    name: string;
    status: string;
    slag: string;
    createdDate: string;
    updatedDate: string;
    constructor(name: string, status: string, slag: string, createdDate: string, updatedDate: string);
    returnData(): {
        name: string;
        status: string;
        slag: string;
        createdDate: string;
        updatedDate: string;
    };
    private isValidString;
}
