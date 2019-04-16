"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./sequelize");
const app_1 = require("./app");
const http_1 = require("http");
const { PORT = 3000 } = process.env;
(() => __awaiter(this, void 0, void 0, function* () {
    yield sequelize_1.sequelize.sync({ force: true });
    http_1.createServer(app_1.app).listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
}))();
//# sourceMappingURL=server.js.map