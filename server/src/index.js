"use strict";
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
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
const port = process.env.PORT || 3000;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionOptions = Object.assign({}, ormconfig_1.default);
        yield (0, typeorm_1.createConnection)(connectionOptions);
        console.log("Connected to database");
        app_1.default.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Error connecting to database", error);
    }
});
connectToDatabase();
