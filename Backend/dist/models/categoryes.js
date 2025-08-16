"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoryes = void 0;
class Categoryes {
    constructor(name, status, slag, createdDate, updatedDate) {
        this.name = name;
        this.status = status;
        this.slag = slag;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        if (!this.isValidString(name)) {
            throw Error(JSON.stringify({ message: "Invalid username. Username must be a non-empty string." }));
        }
        if (!this.isValidString(status)) {
            throw Error(JSON.stringify({ message: "Invalid username. Username must be a non-empty string." }));
        }
        this.returnData();
    }
    returnData() {
        return {
            name: this.name, status: this.status, slag: this.slag, createdDate: this.createdDate, updatedDate: this.updatedDate
        };
    }
    isValidString(userName) {
        return typeof userName === 'string' && userName.trim().length > 0;
    }
}
exports.Categoryes = Categoryes;
//# sourceMappingURL=categoryes.js.map